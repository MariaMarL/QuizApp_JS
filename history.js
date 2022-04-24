import SaveData from "./models/SaveData.js";


function appendHistory() {
    const saveData = new SaveData();
    const lastFive =saveData.showOnHistory();
    const ulList = document.querySelector("#ul-list")
    console.log(lastFive);
    if(ulList) {
        for (let player of lastFive) {
            let innerContent = `${player.nickname} -- ${player.score} --${player.dateNow}`
            let li = document.createElement("li")
            li.innerText = innerContent
            ulList.append(li)
        }
    }
}
appendHistory()