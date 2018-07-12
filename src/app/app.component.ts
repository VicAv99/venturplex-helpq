import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
// import { auth } from '../../node_modules/firebase';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VenturPlex HelpQ';
  links = [
    { path: '/user-profile', icon: 'person', label: 'User Profile', disabled: false },
    { path: '/help-requests', icon: 'loyalty', label: 'HelpQ', disabled: false },
    { path: '/', icon: 'accessible', label: 'RestRoomQ', disabled: true }
  ];

  constructor(public afAuth: AngularFireAuth, public auth: AuthService) { }

  ngOnInit() { }

  login() {
    this.auth.googleLogin();
  }

  logout() {
    this.auth.signOut();
  }

}
