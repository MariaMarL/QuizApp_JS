//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  score = 0;
  round = 1;
  questionIndex = 0;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }
  /**
   * 
   * @param {string} answer question given by the user
   */

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
      this.round++;
    }
    this.questionIndex++;
  }


  selectQuestion(){
  
    let max = (this.round*5);
    let min = (this.round*5)-5;

    return (Math.floor((Math.random() * (max-min) + min)));

  }
}
