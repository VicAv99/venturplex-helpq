import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Requests } from '../shared/request';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-help-requests',
  templateUrl: './help-requests.component.html',
  styleUrls: ['./help-requests.component.css']
})
export class HelpRequestsComponent implements OnInit {
  requestCol: AngularFirestoreCollection<Requests>;
  requests: Observable<any[]>;

  constructor(private af: AngularFirestore) { }

  ngOnInit() {
    this.requestCol = this.af.collection('requests');
    this.requests = this.requestCol.valueChanges();
    this.requests = this.requestCol.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Requests;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }));
  }

  selectRequest(request) {
    this.requestCol = request;
  }

  addPost(req) {
    console.log('REQ', req);
    this.af.collection('requests').add({
      'requester': req.requester,
      'assignee': req.assignee,
      'project': req.project,
      'name': req.name,
      'description': req.description
    });
  }

  deletePost(id) {
    console.log(id);
    this.af.doc(`requests/${id}`).delete();
  }

  cancel(request) {
    this.reset();
  }

  reset() {
    this.requestCol = {
      requester: '',
      assignee: '',
      project: '',
      name: '',
      description: ''
    };
  }

}
