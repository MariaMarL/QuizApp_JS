//@ts-check
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questions } from "./data/questions.js";
import SaveData from "./models/SaveData.js";

// Renderring the page
const renderPage = (quiz, ui) => {
  const TEMPORAL_KEY = "temporalUser"

  const quitButtonObj = ui.buttonQuit(quiz, TEMPORAL_KEY);
   

  if (quiz.isEnded()) {
    // get nickname
    ui.showScores(quiz.score);
    const saveData = new SaveData()
    // guardar objToSave
    saveData.saveToLocalStorage(quiz, TEMPORAL_KEY)
    console.log(saveData.getPreviousData());
    // saveData.showOnHistory()
  } else {
    quiz.selectQuestion();
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.round, 5)
    const choicesCallback = (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    }
    ui.showChoices(quiz.getQuestionIndex().choices, choicesCallback, quitButtonObj);
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();
