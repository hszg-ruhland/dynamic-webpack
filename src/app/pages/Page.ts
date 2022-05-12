'use strict';
class Page{
    public id: string;
    public page;
    public app;
    
    constructor(id){
        this.id = id;
        this.page = null;
    }
    RemoveFromDOM(){
        let page = document.getElementById(this.id);
        if ( page !== null ){
            page.parentElement.removeChild(page);
            this.page = null;
        }
    }
    SetApp(app){
        this.app = app;
    }
    Show(){
    }
}

export {Page};