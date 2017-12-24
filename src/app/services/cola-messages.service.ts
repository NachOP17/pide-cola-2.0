import { Injectable } from '@angular/core';
import { ColaMessages } from '../models/ColaMessages'

@Injectable()
export class ColaMessagesService {

  messages:ColaMessages[] = [];

  inputOpen:boolean = false;

  constructor() { }

  getMessages() {
    return this.messages;
  }

  sendMessage(message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  getInputOpen() {
    return this.inputOpen;
  }

  sendInputOpen(isOpen) {
    this.inputOpen = isOpen;
  }

  removeMessage() {
    this.messages = [];
  }

}
