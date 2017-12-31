import { Component, OnInit } from '@angular/core';
import { ColaMessagesService } from '../../services/cola-messages.service';
import { ColaMessages } from '../../models/ColaMessages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-cola',
  templateUrl: './input-cola.component.html',
  styleUrls: ['./input-cola.component.css']
})
export class InputColaComponent implements OnInit {

  isInputOpen:boolean = false;

  myMessage:ColaMessages = {
    time: '',
    places: '',
  }

  hola:ColaMessages[] = this.colaMessagesService.getMessages();

  constructor(
    private colaMessagesService:ColaMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  activeInput() {
    this.isInputOpen = !this.isInputOpen;
    this.colaMessagesService.sendInputOpen(this.isInputOpen);
  }

  fieldsAreNotFilled() {
    if ((this.myMessage.time == '') || (this.myMessage.places == '')) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit({value, valid}:{value:ColaMessages, valid:boolean}) {
    if (valid) {
      if (this.hola.length == 0) {
        this.colaMessagesService.sendMessage(value);
        this.isInputOpen = false;
        this.myMessage.time = '';
        this.myMessage.places = '';
      }
      this.router.navigate(['/pedir-cola']);
    }
  }

}
