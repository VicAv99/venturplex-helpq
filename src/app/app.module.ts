import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { HelpRequestsComponent } from './help-requests/help-requests.component';
import { HelpRequestListComponent } from './help-requests/help-request-list/help-request-list.component';
import { HelpRequestDetailsComponent } from './help-requests/help-request-details/help-request-details.component';

import { firebaseConfig } from '../../files/firebaseconfig';
import { DateTimeFormatPipe } from './date-time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelpRequestsComponent,
    HelpRequestListComponent,
    HelpRequestDetailsComponent,
    DateTimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
