import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './core/auth.service';

import { take, filter } from '../../node_modules/rxjs/operators';

import { MessagingService } from './core/messaging.service';

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

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public msgService: MessagingService
  ) { }

  ngOnInit() {
    this.authService.user
      .pipe(
      filter(user => !!user),
      take(1)
      )
      .subscribe(user => {
        if (user) {
          this.msgService.getPermission(user);
          this.msgService.monitorRefresh(user);
          this.msgService.receiveMessages();
        }
      });
   }

  login() {
    this.authService.googleLogin();
  }

  logout() {
    this.authService.signOut();
  }

}
