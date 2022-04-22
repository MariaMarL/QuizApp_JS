
function login(e){
    e.preventDefault();
}

const btn0 = document.getElementById('btn0')

btn0.onclick = () => {
    console.log("Hello world")
    var username = document.getElementById('username').value;
    

    var user = {
        username: username,
        score: score
    };

    //var user = []

    var json = JSON.stringify(user);
    console.log(json);
    localStorage.setItem(user, json);
    
    //localStorage.setItem(score,json);
    
    
}
