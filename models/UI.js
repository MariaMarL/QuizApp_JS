import SaveData from "./SaveData.js";

export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }



  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback, quitButtonObj) {
    const {quitButton, quitButtonCallback} = quitButtonObj
    // console.log(quitButtonObj);
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        callback(choices[i])
        quitButton.removeEventListener('click', quitButtonCallback)
      });
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  buttonQuit(quiz, TEMPORAL_KEY){
    const quitButton = document.querySelector("#button_quit")
    const saveData = new SaveData()
    let flag = false

    function quitButtonCallback() {
      flag = true
      if (flag) {
        saveData.saveToLocalStorage(quiz, TEMPORAL_KEY)
        console.log("moved to home");
        window.location.href = "../home.html"
      }
    }
    quitButton.addEventListener('click', quitButtonCallback)
    return { quitButton, quitButtonCallback }
  };

  showScores(score) {
    const gameOverHTML = `
      <h1>Fin del juego</h1>
      <h2 id="score">¡Su premio es: $${score*score*100000}!</h2>
      `;
    // <h2 id="score">Your scores: ${quiz.score}</h2>

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    
    
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
