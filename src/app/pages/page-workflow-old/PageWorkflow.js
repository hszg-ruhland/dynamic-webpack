import {Page} from '../Page'

const page_orderlist_markup =
`      
<div id="page-workflow" class="app-page">
    <nav class="app-header navbar bg-dark navbar-dark">
        <div class="container-fluid">
            <button id="page-workflow-menu-button" class="app-header-menu-button"></button>
            <a class="navbar-brand" href="#">Workflow</a>
        </div>
    </nav>
    <div id="page-workflow-side-menu" class="app-side-menu">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" id="page-workflow-quit" class="nav-link active">Quit</a>
                <a href="#" id="page-workflow-side-menu-order-1" class="nav-link active">Test</a>
                <a href="#" id="page-workflow-side-menu-order-2" class="nav-link active">Test</a>
            </li>
        </ul>
    </div>
    <div class="app-workflow w-100 h-100">
        <div class="list-group app-order-list w-100 h-100">
            <div class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Order 4711</div>
                    Auftragsdetails
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
            </div>
            <div class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Order 4712</div>
                    Auftragsdetails
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
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
        let menu_button = document.getElementById("page-workflow-menu-button");
        menu_button.addEventListener("click",function(e){
            let side_menu = document.getElementById("page-workflow-side-menu");
            side_menu.classList.toggle("open");
        });

        let quit_button = document.getElementById("page-workflow-quit");
        quit_button.addEventListener("click",function(e){
            e.preventDefault();
            instance.RemoveFromDOM();
        });   

    }
}

export {PageWorkflow};