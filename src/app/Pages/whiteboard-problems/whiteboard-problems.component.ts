import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../Services/questions/questions.service';
import { SelectItem } from 'primeng/api';

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
  types: SelectItem[];
  catagories: SelectItem[];
  difficulties: SelectItem[];
  themeColor: string;
  constructor(private questionService: QuestionsService) {
    this.themeColor = sessionStorage.getItem('current-theme');

    this.types = [
      { value: 'Arrays', label: 'Arrays' },
      { value: 'Styling', label: 'Styling' },
    ];

    this.catagories = [
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'CSS3', label: 'CSS3' },
    ];

    this.difficulties = [
      { value: 'Easy', label: 'Easy' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Hard', label: 'Hard' },
    ];
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
