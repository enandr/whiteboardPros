import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: any[];
  returnList: any;
  constructor() {

    this.questions = [
      {
        id: 1,
        name: 'Sort An Array Of Drinks',
        type: 'Array',
        content: 'You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.',
        input: `drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]`,
        output: '[{name: "lime", price: 10}, {name: "lemonade", price: 50}]',
        answer: '',
        defaultCode: `function sortDrinkByPrice(drinks) {
	//code here
}`,
        difficulty: 'Easy',
        catagory: 'JavaScript'
      },
      {
        id: 2,
        name: 'Count How Many Times an Element is Repeated',
        type: 'JavaScript',
        content: 'Given an array, create a function that returns an object detailing how many times each element was repeated. Sort the object by value in descending order.',
        input: 'countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }',
        output: '',
        answer: '',
        defaultCode: `function countRepetitions(arr) {
	//code here
}`,
        difficulty: 'Easy',
        catagory: 'JavaScript'
      },
      {
        id: 3,
        name: 'Is the Number a Repdigit',
        type: 'JavaScript',
        content: 'A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it\'s a repdigit or not.',
        input: 'isRepdigit(66), isRepdigit(59), isRepdigit(3)',
        output: 'true, false, true',
        answer: '',
        defaultCode: `function isRepdigit(num) {
	// code here
}`,
        difficulty: 'Easy',
        catagory: 'JavaScript'
      },
      {
        id: 4,
        name: 'Move Capital Letters to the Front',
        type: 'JavaScript',
        content: 'Create a function that moves all capital letters to the front of a word.',
        input: 'capToFront("hApPy") ➞ "APhpy"',
        output: '',
        answer: '',
        defaultCode: `function capToFront(string) {
	//code here
}`,
        difficulty: 'Medium',
        catagory: 'JavaScript'
      },
      {
        id: 5,
        name: 'Caesar\'s Cipher',
        type: 'JavaScript',
        content: 'Create a function that takes a string str (text to be encrypted) and an integer x (the rotation factor). It should return an encrypted string.',
        input: 'caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"',
        output: '',
        answer: '',
        defaultCode: `function caesarCipher(str, x) {
	//code here
}`,
        difficulty: 'Medium',
        catagory: 'JavaScript'
      },
      {
        id: 6,
        name: 'Phone Letter Combinations',
        type: 'JavaScript',
        content: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.',
        input: 'letter_combinations("23") ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
        output: '',
        answer: '',
        defaultCode: `function letterCombinations(digits) {
	//code here
}`,
        difficulty: 'Hard',
        catagory: 'JavaScript'
      },
    ];
  }

  getQuestions(id?: number): any{
    let returnList;
    if (id){
      returnList = this.questions.forEach(question => {
        if (question.id === id){
          this.returnList = question;
        }
      });
    }
    else {
      this.returnList = this.questions;
    }
    return this.returnList;
  }
}
