import { Component, OnInit } from '@angular/core';
import { ColaMessages } from '../../models/ColaMessages';
import { ColaMessagesService } from '../../services/cola-messages.service';

@Component({
  selector: 'app-cola-messages',
  templateUrl: './cola-messages.component.html',
  styleUrls: ['./cola-messages.component.css']
})
export class ColaMessagesComponent implements OnInit {

  myMessage:ColaMessages[];
  inputIsOpen:boolean;

  constructor(private colaMessagesService:ColaMessagesService) { }

  ngOnInit() {
    this.myMessage = this.colaMessagesService.getMessages();
    // this.inputIsOpen = this.colaMessagesService.getInputOpen();
  }

  removeMessage() {
    this.colaMessagesService.removeMessage();
    this.myMessage = this.colaMessagesService.getMessages();
  }

}
