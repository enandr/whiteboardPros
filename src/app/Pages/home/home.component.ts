import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  themeColor = 'light-theme light-theme-primeng';

  constructor(private router: Router) {
    const savedTheme = sessionStorage.getItem('current-theme');
    if (savedTheme){
      this.themeColor = savedTheme;
    }
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
