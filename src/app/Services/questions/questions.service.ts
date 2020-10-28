import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: any[];
  constructor() {

    this.questions = [
      {
        id: 1,
        name: 'Remove Items From An Array',
        type: 'Array',
        content: '',
        input: '',
        output: '',
        answer: '',
        difficulty: 'Easy',
        catagory: 'JavaScript'
      },
      {
        id: 2,
        name: 'Center Items On A Page',
        type: 'Styling',
        content: '',
        input: '',
        output: '',
        answer: '',
        difficulty: 'Easy',
        catagory: 'CSS3'
      },
    ];
  }
}
