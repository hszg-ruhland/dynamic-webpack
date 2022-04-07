// PageLogin.js
// Module for Login
// ================
//import './page-login.scss';
import {Page} from '../Page.js'
import '../../app-input.css'
import '../../app-floating-label-border.css'
import '../../app-floating-label-underline.css'



const page_login_markup =
`<div id="page-login" class="app-page">
    <nav id="page-login-header" class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Sustainability Test Lab</span>
        </div>
    </nav>

    <div id="page-login-content" class="container-fluid">
        <div id="page-login-form" class="p-4">
        </div>
        <div id="page-login-image" class="p-4">
        </div>
    </div>
</div>`;

// Step1 with email input and Next button
const page_login_step1_markup =
`<div id="page-login-form-step1" class="container-fluid p-4">
    <h4>Login</h4>  
    <div class="app-input">
        <label class="app-floating-label-underline">
            <input id="page-login-form-step1-email" type="email" placeholder=" ">
            <span class="label">Email address</span>
        </label>
    </div>
    <br>
    <button id="page-login-form-step1-next-button" class="btn btn-primary">Next</button>
    <button id="page-login-form-step1-signup-button"  class="btn btn-secondary">Registrate</button>
</div>`;

// Step2 with password input and Next button
const page_login_step2_markup =
`<div id="page-login-form-step2" class="container-fluid p-4">
    <h5 id="page-login-form-step2-text" class="mb-2"></h5>
    <div class="form-floating mb-2">
        <input type="password" class="form-control" id="page-login-form-step2-password" placeholder=" ">
        <label for="page-login-form-step2-password">Password</label>
    </div>
    <br>    
    <button id="page-login-form-step2-next-button"  class="btn btn-primary">Next</button>
    <button id="page-login-form-step2-pwforgotten-button"  class="btn btn-secondary">Password forgotten</button>
</div>`;

// Step3 with Two Pass code input and Start button
const page_login_step3_markup =
`<div id="page-login-form-step3" class="container-fluid p-4">
    <h5 id="page-login-form-step3-text" class="mb-2"></h5>
    <div class="form-floating mb-2">
        <input type="password" class="form-control" id="page-login-form-step3-2passcode" placeholder=" ">
        <label for="page-login-form-step3-2passcode">2 Pass Code</label>
    </div>
    <br>    
    <button id="page-login-form-step3-start-button"  class="btn btn-primary">Start</button>
</div>`;

const page_login_signup_markup =
`<div id="page-login-form-signup" class="container-fluid p-4">
        <h5 id="page-login-form-signup-text">Registration</h5>  
        <div class="form-floating mb-2">
            <input type="email" class="form-control" id="page-login-form-signup-email" placeholder=" ">
            <label for="page-login-form-signup-email">Email *</label>
        </div>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="page-login-form-signup-firstname" placeholder=" ">
            <label for="page-login-form-signup-firstname">First Name *</label>
        </div>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="page-login-form-signup-lastname" placeholder=" ">
            <label for="page-login-form-signup-lastname">Last Name *</label>
        </div>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="page-login-form-signup-mobile" placeholder=" ">
            <label for="page-login-form-signup-mobile">Mobile *</label>
        </div>
        <div class="form-floating mb-2">
            <input type="password" class="form-control" id="page-login-form-signup-password" placeholder=" ">
            <label for="page-login-form-signup-password">Password *</label>
        </div>
        <div class="form-floating mb-2">
            <input type="password" class="form-control" id="page-login-form-signup-confirmpassword" placeholder=" ">
            <label for="page-login-form-signup-confirmpassword">Confirm Password *</label>
        </div>
    <button id="page-login-form-signup-start-button"  class="btn btn-primary">Continue</button>
</div>`;



class PageLogin extends Page{
    constructor(){
        super("page-login");
        this.map_area = null;
        this.markup = page_login_markup;
    }
    Init(){
        let page_elem = document.getElementById(this.id);
        if ( page_elem === null ){
            document.body.insertAdjacentHTML('beforeend', this.markup);
            this.page = document.getElementById("page-login");
        }
    }
    Show(){
        if ( this.page === null ){
            this.Init();
        }
        this.ShowStep1();
    }
    // Single Steps
    ShowStep1(){
        let loginform = document.getElementById("page-login-form");
        loginform.insertAdjacentHTML('beforeend', page_login_step1_markup);
        document.getElementById("page-login-form-step1-next-button").addEventListener("click",event => {
            this.username = document.querySelector("#page-login-form-step1-email").value;
            let step1=document.getElementById("page-login-form-step1");
            step1.parentNode.removeChild(step1);
            this.ShowStep2();
        });
        document.getElementById("page-login-form-step1-signup-button").addEventListener("click",event => {
            this.username = document.querySelector("#page-login-form-step1-email").value;
            let step1=document.getElementById("page-login-form-step1");
            step1.parentNode.removeChild(step1);
            this.ShowSignup();
        });
    }
    ShowStep2(){
        let form = document.getElementById("page-login-form");
        form.insertAdjacentHTML('beforeend', page_login_step2_markup);
        document.getElementById("page-login-form-step2-text").innerHTML="Welcome "+this.username;
        document.getElementById("page-login-form-step2-next-button").addEventListener("click",event => {
            let step2=document.getElementById("page-login-form-step2");
            step2.parentNode.removeChild(step2);
            this.ShowStep3();
        });    
    }
    ShowStep3(){
        let instance = this;
        let form = document.getElementById("page-login-form");
        form.insertAdjacentHTML('beforeend', page_login_step3_markup);
        document.getElementById("page-login-form-step3-text").innerHTML="SMS 2-Pass-Code";
        document.getElementById("page-login-form-step3-start-button").addEventListener("click",event => {
            instance.app.ShowPageDashboard();//app.ShowPageMap();
        });    
    }
    ShowSignup(){
        let form = document.getElementById("page-login-form");
        form.insertAdjacentHTML('beforeend', page_login_signup_markup);
        document.getElementById("page-login-form-signup-start-button").addEventListener("click",event => {
            let signup=document.getElementById("page-login-form-signup");
            signup.parentNode.removeChild(signup);
            this.ShowStep1();
        });
    }
}


export {PageLogin};