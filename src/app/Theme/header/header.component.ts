import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() {

    this.items = [
      {
        label: 'Home',
        icon: '',
        routerLink: ['/']
      },
      {
        label: 'Whiteboards',
        routerLink: ['/whiteboard/problems']
      },
      {
        label: 'Interviews',
        routerLink: ['/']
      }
      ,
      {
        label: 'Resources',
        routerLink: ['/']
      }
    ];
  }

  ngOnInit(): void {
  }

}
