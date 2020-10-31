import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];
  themeColor = 'light-theme light-theme-primeng';

  constructor(private router: Router) {
    const savedTheme = sessionStorage.getItem('current-theme');
    if (savedTheme){
      this.themeColor = savedTheme;
    }

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

  redirect(): void {
    this.router.navigate(['/home']);
  }

  setTheme(theme): void {
    if (this.themeColor !== theme){
      this.themeColor = theme;
      sessionStorage.setItem('current-theme', theme);
    }
  }
}
