import User from "./modules/userModule.js"

window.onload = function() {
    $('#signIn').modal('show')
    const logInBtn = document.querySelector("#logInBtn")
    logInBtn.addEventListener('click', tryLogIn)
    const signUpBtn = document.querySelector("#signUpBtn")
    signUpBtn.addEventListener('click', createUser)
}

function tryLogIn() {
    const userId = document.querySelector("#userIdL")
    const password = document.querySelector("#passwordL")
    const user = new User(userId.value, password.value)

    if (user.login()) {
        location.replace("/index.html")
    } else {
        userId.style.color = "red"
        password.style.color = "red"
    }
}

function createUser() {
    const nameC = document.querySelector("#nameC")
    const userIdC = document.querySelector("#userIdC")
    const passwordC = document.querySelector("#passwordC")
    const user = new User(userIdC.value, passwordC.value, nameC.value)
    user.create()
    nameC.value = ""
    userIdC.value = ""
    passwordC.value = ""
}


