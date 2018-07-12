import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
import { auth } from '../../node_modules/firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VenturPlex HelpQ';
  links = [
    { path: '/help-requests', icon: 'loyalty', label: 'HelpQ', disabled: false },
    { path: '/', icon: 'accessible', label: 'RestRoomQ', disabled: true }
  ];

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(wait => location.reload());
  }

  logout() {
    this.afAuth.auth.signOut();
    location.reload();
  }

}
