
import {Page} from '../Page'

const page_orderlist_markup =
`      
<div id="page-workflow" class="app-page">
    <nav class="app-header navbar bg-dark navbar-dark">
        <div class="container-fluid">
            <button id="page-workflow-back-button" class="app-header-back-button"></button>
            <a class="navbar-brand" href="#">Auftragsliste</a>
        </div>
    </nav>
    <div id="page-workflow-side-menu" class="app-side-menu">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" id="page-workflow-side-menu-status-100" class="nav-link active">Menu 1</a>
                <a href="#" id="page-workflow-side-menu-status-200" class="nav-link active">Menu 2</a>
                <a href="#" id="page-workflow-side-menu-status-200" class="nav-link active">Menu 3</a>
            </li>
        </ul>
    </div>
    <div id="page-workflow-content">
        <div class="container-fluid p-1">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">This is a heading1</h5>
                        <small>3 days ago <span class="badge bg-danger rounded-pill">14</span></small>
                    </div>
                    <p class="mb-1">Enter any content here.</p>
                    <small>Some small text here.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">This is a heading2</h5>
                        <small>3 days ago <span class="badge bg-danger rounded-pill">110</span></small>
                    </div>
                    <p class="mb-1">Enter any content here.</p>
                    <small>Some small text here.</small>
                </a>
            </div>
        </div>
    </div>
</div>
`;


class PageWorkflow extends Page{
    constructor(){
        super("page-workflow");
        this.map_area = null;
        this.markup = page_orderlist_markup;
    }
    Init(){
        let page_elem = document.getElementById(this.id);
        if ( page_elem === null ){
            document.body.insertAdjacentHTML('beforeend', this.markup);
            this.page = document.getElementById(this.id);
        }
    }
    Show(){
        if ( this.page === null ){
            this.Init();
            this.SetCallbacks();
        }
    }
    SetCallbacks(){
        let instance = this;
        let back_button = document.getElementById("page-workflow-back-button");
        back_button.addEventListener("click",function(e){
        instance.RemoveFromDOM();
        });   

    }
}


export {PageWorkflow};