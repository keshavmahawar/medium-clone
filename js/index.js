import Blog from "./modules/blogModule.js";
import navLoad from "./modules/navbarModule.js";
import {$set,setLoading, createDiv} from "./modules/helperFunctions.js"


function renderTags(){
    setLoading("tags")

    let blog = new Blog()
    let tags = blog.getAllTags()

    const tagsDiv = $set("tags")
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        tagsDiv.innerHTML += `<div class="rounded-pill background-light-custom d-flex px-3 py-2 m-2 align-items-center" >
                                    <div class="rounded-circle background-dark-custom text-white px-2">
                                        #
                                    </div>
                                    <div class="ml-2">
                                        <a class="text-light-custom remove-link-format" href="topicBlogs.html?tag=${tag}">${tag}</a>
                                    </div>
                                </div>`
    }
}

window.addEventListener('load', () => {
    navLoad()
    renderTags()
    // console.log()
});