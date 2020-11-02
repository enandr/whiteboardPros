import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../Services/questions/questions.service';

@Component({
  selector: 'app-whiteboard-prompt',
  templateUrl: './whiteboard-prompt.component.html',
  styleUrls: ['./whiteboard-prompt.component.scss']
})
export class WhiteboardPromptComponent implements OnInit {

  themeColor: string;
  promptQuestion: any;
  promptId: number;
  codeContent: string;
  constructor(private route: ActivatedRoute, private questionService: QuestionsService) {
    const promptRoute = this.route.params.subscribe(params => {
      this.promptId = parseInt(params.promptId);
      return params;
    });
    this.themeColor = sessionStorage.getItem('current-theme');
    this.promptQuestion = this.questionService.getQuestions(this.promptId);
    this.displayCode = this.displayCode.bind(this);
  }
  ngOnInit(): void {
    this.codeContent = this.promptQuestion.defaultCode;
  }

  displayCode(): void {
    console.log(this.codeContent);
  }
}
