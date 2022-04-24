
const loginButton = document.querySelector("#loginButton")
const username = document.querySelector("#username")

loginButton.addEventListener("click", function() {
    const TEMPORAL_KEY = "temporalUser"
    const nickname = username.value
    localStorage.setItem(TEMPORAL_KEY, nickname)
    window.location.href = "index.html";
})