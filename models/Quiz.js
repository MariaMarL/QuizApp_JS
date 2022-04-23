//@ts-check
import { Question } from "./Question.js";


export class Quiz {
  score = 0;
  round = 1;
  //questionIndex = 0;
  randomQuestion = 0

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
    return this.questions[this.randomQuestion];
  }

  isEnded() {
    //return this.questions.length === this.questionIndex;
    return this.round > 5;
  }
  /**
   * 
   * @param {string} answer question given by the user
   */

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
      this.round++;
      const element = document.getElementById("partial_score");
      element.innerHTML = `Su acumulado actual es $${this.score*this.score*100000}`;
    }else{
      this.round=6;
    }
    //this.questionIndex++;
    
  }

  getScore(){
    return this.score;
  }

  selectQuestion(){

    let max = (this.round*5);
    let min = (this.round*5)-5;

    this.randomQuestion = Math.floor((Math.random() * (max-min) + min))

    return this.randomQuestion;

  }
}
