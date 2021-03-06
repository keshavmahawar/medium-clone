import userJSON from "./userJSON.js";

class User {
    constructor(userId, password, name) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        let localStorageData = localStorage.getItem("users");
        this.users = localStorageData ? JSON.parse(localStorageData) : userJSON;
    }

    login() {
        let flag = false;
        flag =
            this.users[this.userId] &&
            this.users[this.userId].password == this.password &&
            true;

        if (flag) {
            localStorage.setItem("activeUser", `${this.userId}`);
            return this.userId;
        } else {
            return 0;
        }
    }

    create() {
        this.users[this.userId] = { password: this.password, name: this.name };
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    getDetails(userId) {
        return { name: this.users[userId].name };
    }

    static getDirectName(userId) {
        let localStorageData = localStorage.getItem("users");
        this.users = localStorageData ? JSON.parse(localStorageData) : userJSON;
        return this.users[userId].name;
    }

    static checkLogin() {
        let activeUser = localStorage.getItem("activeUser");

        if (activeUser) {
            return activeUser;
        }

        return false;
    }
}

window.onload = function () {};

// *************** User class example *****************
// let user1 = new User("keshav123", "dcba")
// user1.login()
// let user2 = new User("arjun", "abcd", "Arjun")
// user2.create()
// User.checkLogin()

// console.log(User.getDirectName("aayushi113"))

export default User;
