import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PedirColaComponent } from './components/pedir-cola/pedir-cola.component';
import { DarColaComponent } from './components/dar-cola/dar-cola.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputColaComponent } from './components/input-cola/input-cola.component';
import { ColaMessagesComponent } from './components/cola-messages/cola-messages.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ChatComponent } from './components/chat/chat.component';

import { UserService } from './services/user.service';
import { ColaMessagesService } from './services/cola-messages.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  }, {
    path: 'pedir-cola',
    component: PedirColaComponent,
    pathMatch: 'full'
  }, {
    path: 'dar-cola',
    component: DarColaComponent,
    pathMatch: 'full'
  }, {
    path: 'chat',
    component: ChatComponent,
    pathMatch: 'full'
  }, {
    path: 'perfil',
    component: PerfilComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedirColaComponent,
    DarColaComponent,
    SidebarComponent,
    NavbarComponent,
    InputColaComponent,
    ColaMessagesComponent,
    PerfilComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FlashMessagesModule,
  ],
  providers: [
    UserService,
    ColaMessagesService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
