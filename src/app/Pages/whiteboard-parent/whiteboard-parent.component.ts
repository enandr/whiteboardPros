import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard-parent',
  templateUrl: './whiteboard-parent.component.html',
  styleUrls: ['./whiteboard-parent.component.scss']
})
export class WhiteboardParentComponent implements OnInit {
  themeColor: string;
  constructor() {
    this.themeColor = sessionStorage.getItem('current-theme');
  }

  ngOnInit(): void {
  }
  setTheme(theme): void {
    if (this.themeColor !== theme) {
      this.themeColor = theme;
      sessionStorage.setItem('current-theme', theme);
    }
  }
}
