import { Question } from "../models/Question.js";
import { Quiz } from "../models/Quiz.js";
import { data } from "./data.js";


export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer, question.dificultlevel)
);



// let categorizedquestion =[[1],[2]]
// let dificulties = []

// for(let i = 0; i < questions.length; i++){
//   if (!dificulties.includes(questions[i].dificultlevel)){
//     dificulties.push(questions[i].dificultlevel)
//   }
// }

// console.log(dificulties)

// for(let i in dificulties){
//   console.log(dificulties[i])
// }
