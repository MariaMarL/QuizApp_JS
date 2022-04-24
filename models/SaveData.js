class SaveData {
  #previousData
  constructor() {
    this.#previousData = [];
    this.record = []
  }

  getPreviousData() {
    this.#previousData = this.readPreviousHistory()
    // [] || [{nickname: "juan", score: 400}, {nickname: "david", score: 300}]
    return this.#previousData 
  }


  readPreviousHistory() {
    const localStoredArray = localStorage.getItem('users')
    if (localStoredArray) {
      const parsedArray = JSON.parse(localStoredArray)
      return parsedArray
    }
    return []
  }

  saveToLocalStorage(quiz, TEMPORAL_KEY) {
    const objToSave = this.extractImportantData(quiz, TEMPORAL_KEY)
    const currentSave = this.readPreviousHistory()
    const newSave = [...currentSave, objToSave]
    const historyArray = JSON.stringify(newSave)
    localStorage.setItem('users', historyArray)
  }

  showOnHistory(){
    let recordPlayers= this.readPreviousHistory();
    let recordsNumber = recordPlayers.length;
    let lastFive;
    if (recordsNumber<5){
       lastFive = recordPlayers;
    }else{
       lastFive = recordPlayers.slice(recordPlayers.length-5, recordPlayers.length).reverse();
    }
    return lastFive
  }
  
  extractImportantData(quiz, key) {
    const score = quiz.getScore()
    const nickname = localStorage.getItem(key)
    return {nickname, score}
  }


  // example() {
  //   const array = [1]
  //   const num = 2

  // spread operator
  //   const newArray = [...array, num]
  //   console.log(newArray); // [1,2]
  //   console.log(array); // [1]
  // }
  



}

export default SaveData