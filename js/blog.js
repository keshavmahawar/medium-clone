import User from "./modules/userModule.js";
import Blog from "./modules/blogModule.js";
import {$get,$set,setLoading} from "./modules/helperFunctions.js"


window.addEventListener('load', () => {
    const urlParameters = new URLSearchParams( location.search )
    console.log(urlParameters.get(""))
});