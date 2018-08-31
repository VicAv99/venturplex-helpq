import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { MarkdownModule } from 'angular2-markdown';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { HelpRequestsComponent } from './help-requests/help-requests.component';
import { HelpRequestDetailsComponent } from './help-requests/help-request-details/help-request-details.component';
import { HelpRequestListComponent } from './help-requests/help-request-list/help-request-list.component';

import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { ChatComponent } from './help-requests/help-request-list/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpRequestsComponent,
    HelpRequestDetailsComponent,
    HelpRequestListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    MarkdownModule.forRoot(),
    CoreModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
