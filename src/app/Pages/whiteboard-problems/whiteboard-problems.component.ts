import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../Services/questions/questions.service';

interface Question {
  id?: number;
  name?: string;
  type?: string;
  content?: string;
  input?: string;
  output?: string;
  answer?: string;
  difficulty?: string;
  catagory?: string;
}

@Component({
  selector: 'app-whiteboard-problems',
  templateUrl: './whiteboard-problems.component.html',
  styleUrls: ['./whiteboard-problems.component.scss']
})

export class WhiteboardProblemsComponent implements OnInit {
  questionList: Question[];
  themeColor: string;
  constructor(private questionService: QuestionsService) {
    this.themeColor = sessionStorage.getItem('current-theme');
  }

  ngOnInit(): void {
    this.questionList = this.questionService.questions;
  }
  setTheme(theme): void {
    if (this.themeColor !== theme) {
      this.themeColor = theme;
      sessionStorage.setItem('current-theme', theme);
    }
  }
}
