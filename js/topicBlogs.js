
import Blog from './modules/blogModule.js'

window.onload = function () {
    renderBlogs("tech")
}


function renderBlogs(tag) {
    let test4 = new Blog().getBlogsByTag(tag);
    const articlesList = document.querySelector("#articles")
    const topicHead = document.querySelector("#topicHead")
    topicHead.innerHTML = `${tag[0].toUpperCase() + tag.slice(1)} Stories`
    articlesList.innerHTML = ""
    test4.forEach((item) => {
        let date = new Date(Number(item.date))
        articlesList.innerHTML +=
            `<div class="border-bottom m-2">
                <h3>${item.heading}</h3>
                <div class="my-3 d-flex align-items-center">
                    <i class="fa fa-user-circle ml-1 mr-3" style="font-size: 40px;" aria-hidden="true"></i>
                    <div>
                        <div class="text-light-custom">
                            By ${item.creatorId}
                        </div>
                        <div class="small text-light-custom">
                            ${date.toDateString()}
                        </div>
                    </div>
                </div>
            </div>`
    })
}