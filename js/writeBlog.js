import Blog from './modules/blogModule.js'

console.log(Blog)

window.onload = function() {
    const publishBtn = document.getElementById('publishBtn')
    console.log(publishBtn)
    publishBtn.addEventListener('click',publish)
}

function publish() {
    const title = document.querySelector('#title')
    const content = document.querySelector("#content")
    const activeUser = localStorage.getItem('activeUser')
    let tagsList = document.querySelector("#tagsList")
    tagsList = tagsList.value.split("#").map(tag => tag.trim()).slice(1)
    console.log(title.value,content.value,activeUser,tagsList)
    // let test2 = new Blog("","test 3","xyz","kesMahawar",["tagNew","tech","test"]);
    let test2 = new Blog("",title.value,content.value,activeUser,tagsList);
    test2.createBlog();
}