import Blog from "./modules/blogModule.js";
import navLoad from "./modules/navbarModule.js";
import User from "./modules/userModule.js";

console.log(User);

window.onload = function () {
    navLoad();
    if (!User.checkLogin()) {
        $("#alert").modal("show");
    }

    const publishBtn = document.getElementById("publishBtn");
    publishBtn.addEventListener("click", publish);
};

function publish() {
    const title = document.querySelector("#title");
    const content = document.querySelector("#content");
    const activeUser = localStorage.getItem("activeUser");
    let tagsList = document.querySelector("#tagsList");
    tagsList = tagsList.value
        .split("#")
        .map((tag) => tag.trim())
        .slice(1);
    // console.log(title.value, content.value, activeUser, tagsList);
    let newBlog = new Blog(
        "",
        title.value,
        content.value,
        activeUser,
        tagsList
    );
    newBlog.createBlog();
    window.location = "index.html";
}
