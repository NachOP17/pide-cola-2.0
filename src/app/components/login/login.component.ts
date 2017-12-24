import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs/Observable';
import { Directive, AfterViewInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Directive({selector: 'app-login'})

export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  user:User = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  }

  userName1:string = 'usuario';
  password:string = '123456';
  isShowingError:boolean = false;

  constructor(
    private router:Router,
    private flashMessagesService:FlashMessagesService,
    private userService:UserService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
        document.querySelector('body').classList.add('bg-img');

  }

  ngOnDestroy(): void {
        document.querySelector('body').classList.remove('bg-img');
  }

  disableEnableError() {
    this.isShowingError = true;
    setTimeout(() => {
      this.isShowingError = false;
    }, 4000);
  }

  onLogin({value, valid}:{value:User, valid:boolean}) {
    console.log(this.flashMessagesService);
    if (!this.isShowingError) {
      if (!valid) {
        this.flashMessagesService.show('Los campos no pueden estar vacíos', {cssClass:'alert-danger', timeout:4000});
        this.disableEnableError();
      } else {
        if ((value.userName == this.userName1) && (value.password == this.password)) {
          this.router.navigate(['pedir-cola']);
        } else {
          this.flashMessagesService.show('El usuario o la contraseña son incorrectos', {cssClass:'alert-danger', timeout:4000});
          this.disableEnableError();
          this.router.navigate(['/']);
        }
      }
    }
  }

}
