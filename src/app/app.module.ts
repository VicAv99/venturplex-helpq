import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { HelpRequestsComponent } from './help-requests/help-requests.component';
import { HelpRequestListComponent } from './help-requests/help-request-list/help-request-list.component';
import { HelpRequestDetailsComponent } from './help-requests/help-request-details/help-request-details.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDUGJ6AAQziWPz1MzD8PcZeW8_a-oyrmrg',
  authDomain: 'helpq-3917e.firebaseapp.com',
  databaseURL: 'https://helpq-3917e.firebaseio.com',
  projectId: 'helpq-3917e',
  storageBucket: 'helpq-3917e.appspot.com',
  messagingSenderId: '869636601360'
};

@NgModule({
  declarations: [
    AppComponent,
    HelpRequestsComponent,
    HelpRequestListComponent,
    HelpRequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
