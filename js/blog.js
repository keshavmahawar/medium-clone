import User from "./modules/userModule.js";
import Blog from "./modules/blogModule.js";
import {$get,$set,setLoading, createDiv} from "./modules/helperFunctions.js"

function renderBlog(blogId){
    setLoading("creatorNameTop")
    setLoading("blogHeading")
    setLoading("blogContent")
    setLoading("creatorNameBottom")
    let blog = new Blog(blogId)
    let {heading,content,creatorId,date} = blog.getBlogJson()
    date = new Date(parseInt(date)).toDateString()

    $set("blogHeading").append(heading)
    $set("blogContent").append(content)
    $set("creatorNameTop").append(creatorId, createDiv("text-light-custom small",date))
    $get("creatorNameBottom").innerHTML =`<div class="text-light-custom">
                                                WRITTEN BY
                                            </div>
                                            <h4 class="text-dark-custom">
                                                ${creatorId}
                                            </h4>
                                            <div class="text-light-custom small">${date}</div>`
}

window.addEventListener('load', () => {
    const urlParameters = new URLSearchParams( location.search )
    const blogId = urlParameters.get("blogId")
    renderBlog(blogId)
    // console.log()
});