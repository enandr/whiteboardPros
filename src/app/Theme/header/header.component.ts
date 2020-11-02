import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  // navigationSubscription: any;
  themeColor = 'dark-theme dark-theme-primeng';
  constructor(private router: Router) {



    const savedTheme = sessionStorage.getItem('current-theme');
    if (savedTheme) {
      this.themeColor = savedTheme;
    }
    this.items = [
      {
        label: 'WbW',
        icon: '',
        routerLink: ['/home']
      },
      {
        label: 'Whiteboards',
        items: [
          {
          label: 'Problems',
          routerLink: ['/whiteboard'],
          },
          {
          label: 'Strategies'
          }
        ]
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
          items: [
            { label: 'JavaScript' },
            { label: 'TypeScript' },
            { label: 'React' },
            { label: 'Angular' },
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
      {
        label: 'Theme',
        items: [
          { label: 'Light', command: () => {this.setTheme('light-theme light-theme-primeng');} },
          { label: 'Dark', command: () => { this.setTheme('dark-theme dark-theme-primeng'); }  }
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  setTheme(theme): void {
    if (this.themeColor !== theme) {
      this.themeColor = theme;
      sessionStorage.setItem('current-theme', theme);
    }
    console.log('dfas');
    this.router.navigateByUrl(this.router.url);
  }

}
