class Question {
  /**
   *
   * @param {string} text The Text of the Question
   * @param {string[]} choices a lis of choices for the question
   * @param {string} answer the answef of the question
   * @param {number} dificultlevel the question's dificult
   */
  constructor(text, choices, answer,dificultlevel) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.dificultlevel = dificultlevel;
  }

  /**
   *
   * @param {string} choice the choice selected
   * @returns {boolean} returns if the choice is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

export { Question };
