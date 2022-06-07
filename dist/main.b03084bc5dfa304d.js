"use strict";(self.webpackChunkdynamic_webpack=self.webpackChunkdynamic_webpack||[]).push([[179],{88:(n,e,t)=>{t.d(e,{T:()=>i});var i=function(){function n(n){this.id=n,this.markup=null,this.page=null,this.appStatic=null,this.appDynamic=null}return n.prototype.SetMarkup=function(n){this.markup=n},n.prototype.AppendMarkupToDOM=function(n){null!==document.getElementById(this.id)?this.RemoveFromDOM():(this.SetMarkup(n),document.body.insertAdjacentHTML("beforeend",this.markup),this.page=document.getElementById(this.id))},n.prototype.RemoveFromDOM=function(){var n=document.getElementById(this.id);null!==n&&(n.parentElement.removeChild(n),this.page=null)},n.prototype.SetAppStatic=function(n){this.appStatic=n},n.prototype.SetAppDynamic=function(n){this.appDynamic=n},n.prototype.Show=function(){var n=document.getElementById(this.id);null!==n&&n.classList.remove("app-invisible")},n.prototype.Hide=function(){var n=document.getElementById(this.id);null!==n&&n.classList.add("app-invisible")},n}()},740:(n,e,t)=>{var i,o=t(961),a=t(162),p=t(509),l=function(){function n(){this.bs58=a("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),this.Buffer=p.Buffer,this.compress=o.compress,this.decompress=o.decompress}return n.prototype.Init=function(){},n.prototype.Bs58encode=function(n){var e=this.Buffer.from(n,"utf8");return this.bs58.encode(e)},n.prototype.Bs58decode=function(n){return this.bs58.decode(n).toString("utf8")},n.prototype.Compress=function(n){return this.compress(n)},n.prototype.Decompress=function(n){return this.decompress(n)},n.prototype.Template=function(n,e){return e},n}(),s=t(88),r=(i=function(n,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},i(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),d=function(n){function e(){var e=n.call(this,"page-login")||this;return e.map_area=null,e.markup='<div id="page-login" class="app-page">\n    <nav id="page-login-header">\n        <span class="title">Sustainability Lab by Klaus Ruhland</span>\n    </nav>\n\n    <div id="page-login-content">\n        <div id="page-login-form">\n        </div>\n        <div id="page-login-image">\n        </div>\n    </div>\n</div>',e}return r(e,n),e.prototype.Init=function(){null===document.getElementById(this.id)&&(document.body.insertAdjacentHTML("beforeend",this.markup),this.page=document.getElementById("page-login"))},e.prototype.Show=function(){null===this.page&&this.Init(),this.ShowStep1()},e.prototype.ShowStep1=function(){var n=this;document.getElementById("page-login-form").insertAdjacentHTML("beforeend",'<div id="page-login-form-step1" class="container-fluid p-4">\n    <div class="page-login-form-title">Login</div>  \n    <div class="app-input">\n        <label class="app-floating-label-underline">\n            <input id="page-login-form-step1-email" type="email" placeholder=" ">\n            <span class="label">Email address</span>\n        </label>\n    </div>\n    <br>\n    <button id="page-login-form-step1-next-button" class="app-primary">Next</button>\n    <button id="page-login-form-step1-signup-button"  class="app-secondary">Registrate</button>\n</div>'),document.getElementById("page-login-form-step1-next-button").addEventListener("click",(function(e){var t=document.querySelector("#page-login-form-step1-email");n.username=t.value;var i=document.getElementById("page-login-form-step1");i.parentNode.removeChild(i),n.ShowStep2()})),document.getElementById("page-login-form-step1-signup-button").addEventListener("click",(function(e){var t=document.querySelector("#page-login-form-step1-email");n.username=t.value;var i=document.getElementById("page-login-form-step1");i.parentNode.removeChild(i),n.ShowSignup()}))},e.prototype.ShowStep2=function(){var n=this;document.getElementById("page-login-form").insertAdjacentHTML("beforeend",'<div id="page-login-form-step2" class="container-fluid p-4">\n    <div id="page-login-form-step2-text" class="mb-2 page-login-form-title"></h5>\n    <div class="app-input">\n        <label class="app-floating-label-underline">\n            <input id="page-login-form-step2-password" type="password" placeholder=" ">\n            <span class="label">Password</span>\n        </label>\n    </div>\n    <br>    \n    <button id="page-login-form-step2-next-button"  class="app-primary">Next</button>\n    <button id="page-login-form-step2-pwforgotten-button"  class="app-secondary">Password forgotten</button>\n</div>'),document.getElementById("page-login-form-step2-text").innerHTML="Welcome "+this.username,document.getElementById("page-login-form-step2-next-button").addEventListener("click",(function(e){var t=document.getElementById("page-login-form-step2");t.parentNode.removeChild(t),n.ShowStep3()}))},e.prototype.ShowStep3=function(){var n=this;document.getElementById("page-login-form").insertAdjacentHTML("beforeend",'<div id="page-login-form-step3" class="container-fluid p-4">\n    <div id="page-login-form-step3-text" class="mb-2 page-login-form-title"></div>\n    <div class="app-input">\n        <label class="app-floating-label-underline">\n            <input id="page-login-form-step3-passcode" type="text" placeholder=" ">\n            <span class="label">Passcode</span>\n        </label>\n    </div>\n    <br>    \n    <button id="page-login-form-step3-start-button"  class="app-primary">Start</button>\n</div>'),document.getElementById("page-login-form-step3-text").innerHTML="SMS 2-Pass-Code",document.getElementById("page-login-form-step3-start-button").addEventListener("click",(function(e){n.appStatic.LoadAppDynamic()}))},e.prototype.ShowSignup=function(){var n=this;document.getElementById("page-login-form").insertAdjacentHTML("beforeend",'<div id="page-login-form-signup" class="container-fluid p-4">\n        <div id="page-login-form-signup-text" class="page-login-form-title">Registration</div>  \n        <div class="app-input">\n            <label class="app-floating-label-underline">\n                <input id="page-login-form-signup-email" type="email" placeholder=" ">\n                <span class="label">Email *</span>\n            </label>\n        </div>\n        <div class="app-input">\n            <label class="app-floating-label-underline">\n                <input id="page-login-form-signup-firstname" type="text" placeholder=" ">\n                <span class="label">First Name *</span>\n            </label>\n        </div>\n        <div class="app-input">\n            <label class="app-floating-label-underline">\n                <input id="page-login-form-signup-lastname" type="text" placeholder=" ">\n                <span class="label">Last Name *</span>\n            </label>\n        </div>\n        <div class="app-input">\n            <label class="app-floating-label-underline">\n                <input id="page-login-form-signup-mobile" type="text" placeholder=" ">\n                <span class="label">Mobile *</span>\n            </label>\n        </div>\n        <div class="app-input">\n            <label class="app-floating-label-underline">\n                <input id="page-login-form-signup-password" type="password" placeholder=" ">\n                <span class="label">Password *</span>\n            </label>\n        </div>\n        <div class="app-input">\n            <label class="app-floating-label-underline">\n                <input id="page-login-form-signup-confirmpassword" type="password" placeholder=" ">\n                <span class="label">Confirm Password *</span>\n            </label>\n        </div>\n    <button id="page-login-form-signup-start-button"  class="app-primary">Continue</button>\n</div>'),document.getElementById("page-login-form-signup-start-button").addEventListener("click",(function(e){var t=document.getElementById("page-login-form-signup");t.parentNode.removeChild(t),n.ShowStep1()}))},e}(s.T),c=new(function(){function n(){this.toolsStatic=new l,this.pageLogin=new d,this.appDynamic=null}return n.prototype.Init=function(){this.toolsStatic.Init()},n.prototype.LoadAppDynamic=function(){var n=this,e=this;null===this.appDynamic&&Promise.all([t.e(672),t.e(143)]).then(t.bind(t,985)).then((function(t){n.appDynamic=new t.AppDynamic,n.appDynamic.SetAppStatic(e),n.appDynamic.ShowPageDashboard()}))},n.prototype.ShowPageLogin=function(){this.pageLogin.SetAppStatic(this),this.pageLogin.Show()},n}());document.addEventListener("DOMContentLoaded",(function(){c.Init(),c.ShowPageLogin()}))}},n=>{n.O(0,[384,348],(()=>(740,n(n.s=740)))),n.O()}]);