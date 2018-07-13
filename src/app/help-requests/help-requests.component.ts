import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map, skip, tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

import { Requests } from '../shared/request';
import { User } from '../shared/user';

@Component({
  selector: 'app-help-requests',
  templateUrl: './help-requests.component.html',
  styleUrls: ['./help-requests.component.css']
})
export class HelpRequestsComponent implements OnInit {
  requestCol: AngularFirestoreCollection<Requests>;
  requests: Observable<any[]>;
  individualRequest: AngularFirestoreDocument;
  form: FormGroup;
  userCol: AngularFirestoreCollection<User>;
  userRef: Observable<any[]>;

  constructor(
    private af: AngularFirestore,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.requestCol = this.af.collection('requests');
    this.requestCol.stateChanges()
      .pipe(
        skip(1),
        tap(change => this.notify(change))
      ).subscribe();

    this.requests = this.requestCol.snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Requests;
          const id = a.payload.doc.id;
          return { id, data };
        }).sort((a, b) => {
          return a.data.createdAt - b.data.createdAt;
        });
      })
    );
    this.userCol = this.af.collection('users');
    this.userRef = this.userCol.snapshotChanges()
      .pipe(map(res => {
        return res.map(b => {
          const users = b.payload.doc.data();
          return { users };
        });
      }));
    this.initForm();
  }

  selectRequest(request) {
    this.form.patchValue(request.data);
    this.requestCol = request;
  }

  saveRequest(request) {
    const reqObj: { requester, assignee, project, summary, description } = this.form.getRawValue();

    if (this.form.valid) {
      request.id ? this.updateRequest(request, reqObj) :
        this.addRequest(reqObj);
    }
  }

  addRequest(request) {
    const timestamp = new Date().getTime();

    this.af.collection('requests').add({
      'requester': request.requester,
      'assignee': request.assignee,
      'project': request.project,
      'summary': request.summary,
      'description': request.description,
      'createdAt': timestamp
    });
    this.reset();
  }

  updateRequest(request, reqObj) {
    this.individualRequest = this.af.doc(`requests/${request.id}`);
    this.individualRequest.update(reqObj);
    this.reset();
  }

  deleteRequest(id) {
    this.af.doc(`requests/${id}`).delete();
  }

  reset() {
    this.form.reset();
    this.requestCol = {} as any;
  }

  notify(change) {
    const data = change[0].payload.doc.data();
    const message = `${data.requester} ${change[0].type} "${data.summary}"`;
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if ((<any>Notification).permission === 'granted') {
      const notification = new Notification(message);
    } else if ((<any>Notification).permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          const notification = new Notification(message);
        }
      });
    }
  }

  initForm() {
    this.form = this.fb.group({
      requester: ['', Validators.required],
      assignee: ['Jon Garvey', Validators.required],
      project: ['', Validators.required],
      summary: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', Validators.required]
    });
  }

}
