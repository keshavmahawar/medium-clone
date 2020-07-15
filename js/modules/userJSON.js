
let users = {
    manideep39: {
        password: "abcd",
        name: "Manideep"
    },
    keshav123: {
        password: "dcba",
        name: "Keshav"
    },
    aayushi: {
        password: "abcd",
        name: "Aayushi"
    },
    arjun: {
        password: "dcba",
        name: "Arjun"
    }
}

window.onload = function() {
    localStorage.setItem("users", JSON.stringify(users))
}