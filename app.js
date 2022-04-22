//@ts-check
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questions } from "./data/questions.js";

// Renderring the page
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    //console.log(quiz);
    quiz.selectQuestion();
    // ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.round, 5)
    //ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();
