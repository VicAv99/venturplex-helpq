import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { MessagingService } from './messaging.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [
    AuthService,
    MessagingService,
    AuthGuard
  ]
})
export class CoreModule { }
