import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../shared/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }
