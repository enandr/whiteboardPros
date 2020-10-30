import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      /* {
        label: 'Home',
        icon: '',
        routerLink: ['/']
      }, */
      {
        label: 'BECOME A WIZARD',
        routerLink: ['/whiteboard/problems']
      },
      {
        label: 'ABOUT',
        routerLink: ['/about']
      }
      ,
      {
        label: 'OUR SEVICES',
        routerLink: ['/resources']
      }
    ];
  }

  ngOnInit(): void {
  }

}
