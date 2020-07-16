import User from "./userModule.js"
import {$set} from "./helperFunctions.js"
export default function navLoad() {
    const user = User.checkLogin()
    if(user){
        $set("navbarRight").innerHTML=`<a class="nav-link text-dark text-dark-custom font-heading-custom mr-1" href="logout.html">${User.getDirectName(user)} </a> <i class="fa fa-user-circle" style="font-size: 25px;" aria-hidden="true"></i>`
    }else{
        $set("navbarRight").innerHTML = `<a class="nav-link text-dark mr-4" href="loginRegistration.html">Sign in</a>
                                         <a class="btn btn-lg big-button text-white background-success-custom align-center small-button mt-3 mt-md-0" href="loginRegistration.html">Get Started</a>`
    }
}