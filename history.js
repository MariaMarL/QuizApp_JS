import SaveData from "./models/SaveData.js";

const primero = document.querySelector("#history");
const loadBtn = document.querySelector("#loadBtn")

if(loadBtn) {
    loadBtn.addEventListener("click", appendHistory)
}


if( primero ) {
    primero.addEventListener("click", myFunction)
}


function myFunction(){
    window.location.href = "record.html";
}


function appendHistory() {
    const saveData = new SaveData();
    const lastFive =saveData.showOnHistory();
    const ulList = document.querySelector("#ul-list")
    if(ulList) {
        console.log("inside if");
        console.log(ulList);
        for (let player of lastFive) {
            let innerContent = `${player.nickname} -- ${player.score}`
            let li = document.createElement("li")
            li.innerText = innerContent
            console.log(li);
            ulList.append(li)
        }
    }
}
