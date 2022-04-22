function login(e){
    e.preventDefault();

    // var email = document.getElementById('email').value;
    // var username = document.getElementById('username').value;
    // var pwd = document.getElementById('password').value;

    // var user = {
    //     email: email,
    //     username: username,
    //     password: pwd,
    // };

    // var json = JSON.stringify(user);
    // console.log(json);
    // localStorage.setItem(username, json);
    // console.log("You have signed up successfully!");
}

const btn0 = document.getElementById('btn0')
btn0.onclick=() => {
    console.log("Hello world")
    var username = document.getElementById('username').value;

    var user = {
        username: username,
    };

    var json = JSON.stringify(user);
    console.log(json);
    localStorage.setItem(username, json);
}
