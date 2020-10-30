import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  themeColor: string;
  constructor() {
    this.themeColor = sessionStorage.getItem('current-theme');
  }

  ngOnInit(): void {
  }

  setTheme(theme): void {
    console.log(theme);
    if (this.themeColor !== theme) {
      this.themeColor = theme;
      sessionStorage.setItem('current-theme', theme);
    }
  }

}
