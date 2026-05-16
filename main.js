function login() {
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Aj Darimbang" && password === "67ate9") {
        window.alert("Login success! " + username + "!");

    } 

    else {
        window.alert("Login failed!");
    }
}
