import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../Services/questions/questions.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

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
  first = 0;

  rows = 10;
  constructor(private questionService: QuestionsService, private router: Router) {
    this.themeColor = sessionStorage.getItem('current-theme');

    this.types = [
      { value: 'Array', label: 'Array' },
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
    this.questionList = this.questionService.getQuestions();
  }
  setTheme(theme): void {
    if (this.themeColor !== theme) {
      this.themeColor = theme;
      sessionStorage.setItem('current-theme', theme);
    }
  }
  next(): void {
    this.first = this.first + this.rows;
  }

  prev(): void {
    this.first = this.first - this.rows;
  }

  reset(): void {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.questionList ? this.first === (this.questionList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.questionList ? this.first === 0 : true;
  }

  navToQuestion(question): void {
    let tempName = question.name;
    tempName = tempName.replaceAll(' ', '_');
    this.router.navigate(['/whiteboard/problems', tempName]);
  }

  makeUrlFriendly(questionName): string {
    questionName = questionName.replaceAll(' ', '_');
    return questionName;
  }
}
