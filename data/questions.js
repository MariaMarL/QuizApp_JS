import { Question } from "../models/Question.js";
import { Quiz } from "../models/Quiz.js";
import { data } from "./data.js";


export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer, question.dificultlevel)
);

