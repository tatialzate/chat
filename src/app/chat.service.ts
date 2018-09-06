import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Message } from "./message.model";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
}
