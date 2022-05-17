'use strict';

class Page{
    public id: string;
    public markup: string;
    public page: HTMLElement;
    public appStatic; // Static Part of the App
    public appDynamic; 
    
    constructor(id){
        this.id = id;
        this.markup = null;
        this.page = null;
        this.appStatic = null;
        this.appDynamic = null;
    }
    SetMarkup(markup:string){
        this.markup = markup;
    }
    AppendMarkupToDOM(markup:string){
        let page = document.getElementById(this.id);
        if ( page !== null )
            this.RemoveFromDOM();
        else { // ( page === null )
            this.SetMarkup(markup);
            document.body.insertAdjacentHTML('beforeend', this.markup);
            this.page = document.getElementById(this.id);
        }
    }
    RemoveFromDOM(){
        let page = document.getElementById(this.id);
        if ( page !== null ){
            page.parentElement.removeChild(page);
            this.page = null;
        }
    }
    SetAppStatic(appStatic){
        this.appStatic = appStatic;
    }
    SetAppDynamic(appDynamic){
        this.appDynamic = appDynamic;
    }
    Show(){ // work with class app-invisible
        let page = document.getElementById(this.id);
        if ( page !== null ){
            page.classList.remove("app-invisible");
        }
    }
    Hide(){
        let page = document.getElementById(this.id);
        if ( page !== null ){
            page.classList.add("app-invisible");
        }
    }
}

export {Page};