import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

const config = {
  apiKey: "AIzaSyCZ56Ppe94HnBlBfrpqmt9kD-eg4iet6PQ",
  authDomain: "chat-6f4dd.firebaseapp.com",
  databaseURL: "https://chat-6f4dd.firebaseio.com",
  projectId: "chat-6f4dd",
  storageBucket: "chat-6f4dd.appspot.com",
  messagingSenderId: "622436543586"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
