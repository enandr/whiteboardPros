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
        label: 'Whiteboard Wizards',
        icon: '',
        routerLink: ['/']
      },
      {
        label: 'Home',
        icon: '',
        routerLink: ['/home']
      },
      {
        label: 'Whiteboards',
        routerLink: ['/whiteboard/problems']
      },
      {
        label: 'Interviews',
        routerLink: ['/interviews']
      },
      {
        label: 'Resources',
        routerLink: ['/resources'],
        items: [{
          label: 'Coding',
          // icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'JavaScript' },
            { label: 'TypeScript' },
            { label: 'React' },
            { label: 'Angular' },
            // { label: 'TypeScript' },
            // { label: 'TypeScript' },
            // { label: 'TypeScript' },
          ]
          },
          {
            label: 'Styling',
            // icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'CSS3' },
              { label: 'SCSS' },
              { label: 'Bootstrap' },
              { label: 'Material' },
            ]
          }
        ]
      }, {
        label: 'Our Great Wizards',
        routerLink: ['/greatwizards']
      },
    ];
  }

  ngOnInit(): void {
  }

}
