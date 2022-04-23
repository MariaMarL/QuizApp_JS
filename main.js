
// function login(e){
//     e.preventDefault();
// }

// const btn0 = document.getElementById('btn0')

// btn0.onclick = () => {
//     console.log("Hello world")
//     var username = document.getElementById('username').value;
    

//     var user = {
//         username: username,
//         score: score
//     };

//     //var user = []

//     var json = JSON.stringify(username);
//     console.log(json);
//     localStorage.setItem(user, json);
    
//     //localStorage.setItem(score,json);
    
    
// }

const loginButton = document.querySelector("#loginButton")
const username = document.querySelector("#username")

loginButton.addEventListener("click", function() {
    const TEMPORAL_KEY = "temporalUser"
    const nickname = username.value
    localStorage.setItem(TEMPORAL_KEY, nickname)
    window.location.href = "index.html";
})