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
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  buttonQuit(){
    console.log("salir")
    // const quit = document.getElementById("button_quit");
    // quit.onmouseover = console.log("salir")
  };

  salir(){
    console.log("Salir")
  }

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
