import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Requests } from '../shared/request';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../node_modules/firebase';

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
    this.requests = this.requestCol.snapshotChanges()
    .pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Requests;
        const id = a.payload.doc.id;
        return { id, data };
      }).sort((a, b) => {
        return a.data.createdAt - b.data.createdAt;
      });
    }));
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
