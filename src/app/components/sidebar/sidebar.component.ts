import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isMenuOpen:boolean = false;
  isSubmenuOpen:boolean = false;

  chats = [{
    name: "Pedro",
    lastName: "Pérez"
  }, {
    name: "Juan",
    lastName: "Rodriguez"
  }, {
    name: "Carmen",
    lastName: "Castillo"
  }]

  activeMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
