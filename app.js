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
    console.log("finished game");
    const saveData = new SaveData()
    // guardar objToSave
    saveData.saveToLocalStorage(quiz, TEMPORAL_KEY)
    console.log(saveData.getPreviousData());
    // const parsedObj = JSON.parse(retrievedString)
    // parsedObj.score = quiz.score
    // const modified = JSON.stringify(parsedObj)
    // localStorage.setItem("user", modified)
  } else {
    //console.log(quiz);
    quiz.selectQuestion();
    // ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.round, 5)
    //ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
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
