"use strict";(self.webpackChunkdynamic_webpack=self.webpackChunkdynamic_webpack||[]).push([[179],{654:(t,e,n)=>{n.d(e,{l:()=>h});var o=n(961),i=n(162),r=n(509),p=function(){function t(){this.bs58=i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),this.Buffer=r.Buffer,this.compress=o.compress,this.decompress=o.decompress}return t.prototype.Init=function(){},t.prototype.Bs58encode=function(t){var e=this.Buffer.from(t,"utf8");return this.bs58.encode(e)},t.prototype.Bs58decode=function(t){return this.bs58.decode(t).toString("utf8")},t.prototype.Compress=function(t){return this.compress(t)},t.prototype.Decompress=function(t){return this.decompress(t)},t.prototype.Template=function(t,e){return e},t}(),a=function(){function t(){this.encrypt=null,this.bootstrap=null}return t.prototype.LoadEncrypt=function(t){var e=this;return n.e(405).then(n.bind(n,565)).then((function(n){return null===e.encrypt&&(e.encrypt=new n.JSEncrypt,e.encrypt.setPublicKey(t)),e.encrypt})).catch((function(t){return t}))},t.prototype.LoadLeaflet=function(){return n.e(567).then(n.bind(n,50)),n.e(567).then(n.t.bind(n,243,23)).then((function(t){return t.default})).catch((function(t){return t}))},t}(),s=n(88),h=new(function(){function t(){this.toolsStatic=new p,this.toolsDynamic=new a,this.pageMap=s.T,this.pageLogin=s.T,this.pageDashboard=s.T,this.pageWorkflow=s.T}return t.prototype.Init=function(){this.toolsStatic.Init()},t.prototype.ShowPageMap=function(){var t=this,e=this;null===this.pageMap?(Promise.all([n.e(927),n.e(143)]).then(n.bind(n,855)),Promise.all([n.e(927),n.e(143)]).then(n.bind(n,593)).then((function(n){t.pageMap=new n.PageMap,t.pageMap.SetApp(e),t.pageMap.Show()}))):this.pageMap.Show()},t.prototype.ShowPageDashboard=function(){var t=this,e=this;null===this.pageDashboard?(n.e(129).then(n.bind(n,222)),n.e(927).then(n.bind(n,244)).then((function(o){t.bootstrap=o,Promise.all([n.e(927),n.e(143)]).then(n.bind(n,315)),Promise.all([n.e(927),n.e(143)]).then(n.bind(n,245)).then((function(n){t.pageDashboard=new n.PageDashboard,t.pageDashboard.SetApp(e),t.pageDashboard.Show()}))}))):this.pageDashboard.Show()},t.prototype.ShowPageLogin=function(){var t=this,e=this;null===this.pageLogin?(Promise.all([n.e(927),n.e(143)]).then(n.bind(n,92)),Promise.all([n.e(927),n.e(143)]).then(n.bind(n,765)).then((function(n){t.pageLogin=new n.PageLogin,t.pageLogin.SetApp(e),t.pageLogin.Show()}))):this.pageLogin.Show()},t.prototype.ShowPageWorkflow=function(){var t=this,e=this;null===this.pageWorkflow?(Promise.all([n.e(927),n.e(143)]).then(n.bind(n,392)),Promise.all([n.e(927),n.e(143)]).then(n.bind(n,375)).then((function(n){t.pageWorkflow=new n.PageWorkflow,t.pageWorkflow.SetApp(e),t.pageWorkflow.Show()}))):this.pageWorkflow.Show()},t}())},88:(t,e,n)=>{n.d(e,{T:()=>o});var o=function(){function t(t){this.id=t,this.page=null}return t.prototype.RemoveFromDOM=function(){var t=document.getElementById(this.id);null!==t&&(t.parentElement.removeChild(t),this.page=null)},t.prototype.SetApp=function(t){this.app=t},t.prototype.Show=function(){},t}()},607:(t,e,n)=>{var o=n(654);document.addEventListener("DOMContentLoaded",(function(){o.l.Init(),o.l.ShowPageLogin()}))}},t=>{t.O(0,[384,348],(()=>(607,t(t.s=607)))),t.O()}]);