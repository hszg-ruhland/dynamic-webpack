import {Page} from '../Page'
import {MsgOkCancel} from '../../../lib/MsgBox'

const page_dashboard_markup =
`      
<div id="page-dashboard" class="app-page">
    <nav class="app-header navbar bg-dark navbar-dark">
        <div class="container-fluid">
            <button id="page-dashboard-menu-button" class="app-header-menu-button"></button>
            <a class="navbar-brand" href="#">Dashboard</a>

            <a href="#" id="page-dashboard-user-button" class="app-header-user-button" data-bs-toggle="dropdown"></a>
            <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </nav>
    <div id="page-dashboard-side-menu" class="app-side-menu">
<!-- Aus den bootstrap samples -->
<!--
<ul class="list-unstyled ps-0">
<li class="mb-1">
  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
    Home
  </button>
  <div class="collapse show" id="home-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li><a href="#" class="link-dark rounded">Overview</a></li>
      <li><a href="#" class="link-dark rounded">Updates</a></li>
      <li><a href="#" class="link-dark rounded">Reports</a></li>
    </ul>
  </div>
</li>
<li class="mb-1">
  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
    Dashboard
  </button>
  <div class="collapse" id="dashboard-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li><a href="#" class="link-dark rounded">Overview</a></li>
      <li><a href="#" class="link-dark rounded">Weekly</a></li>
      <li><a href="#" class="link-dark rounded">Monthly</a></li>
      <li><a href="#" class="link-dark rounded">Annually</a></li>
    </ul>
  </div>
</li>
<li class="mb-1">
  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
    Orders
  </button>
  <div class="collapse" id="orders-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li><a href="#" class="link-dark rounded">New</a></li>
      <li><a href="#" class="link-dark rounded">Processed</a></li>
      <li><a href="#" class="link-dark rounded">Shipped</a></li>
      <li><a href="#" class="link-dark rounded">Returned</a></li>
    </ul>
  </div>
</li>
<li class="border-top my-3"></li>
<li class="mb-1">
  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
    Account
  </button>
  <div class="collapse" id="account-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li><a href="#" class="link-dark rounded">New...</a></li>
      <li><a href="#" class="link-dark rounded">Profile</a></li>
      <li><a href="#" class="link-dark rounded">Settings</a></li>
      <li><a href="#" class="link-dark rounded">Sign out</a></li>
    </ul>
  </div>
</li>
</ul>
-->
<!-- ========================= -->
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" id="page-dashboard-side-menu-msgbox" class="nav-link active">Message Box</a>
                <a href="#" id="page-dashboard-side-menu-map" class="nav-link active">Map</a>
            </li>
        </ul>

    </div>
    <div class="app-dashboard">
        <div class="container-fluid">
            <div class="row gx-4 gy-4">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card cell">
                        <div class="card-body">
                            <h5 class="card-title">Card Title</h5>
                            <h6 class="card-subtitle">Card Subtitle</h6>
                            <p class="card-text">Card description text</p>
                            <a href="#" id="page-dashboard-cell1-link" class="card-link">Link1</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card cell">
                        <div class="card-body">
                            <h5 class="card-title">Card Title</h5>
                            <h6 class="card-subtitle">Card Subtitle</h6>
                            <p class="card-text">Card description text</p>
                            <a href="#" id="page-dashboard-cell2-link" class="card-link">Link2</a>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;


class PageDashboard extends Page{
    constructor(){
        super("page-dashboard");
        this.map_area = null;
        this.markup = page_dashboard_markup;
    }
    Init(){
      let instance = this;
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
        let menu_button = document.getElementById("page-dashboard-menu-button");
        menu_button.addEventListener("click",function(e){
            let side_menu = document.getElementById("page-dashboard-side-menu");
            side_menu.classList.toggle("open");
        });

        let msgbox = document.getElementById("page-dashboard-side-menu-msgbox");
        msgbox.addEventListener("click",function(e){
            e.preventDefault();
            MsgOkCancel("Hallo Welt", function(){}, function(){});
        });
        let map = document.getElementById("page-dashboard-side-menu-map");
        map.addEventListener("click",function(e){
            e.preventDefault();
            instance.appDynamic.ShowPageMap();
        });
        let cell_link1 = document.getElementById("page-dashboard-cell1-link");
        cell_link1.addEventListener("click",function(e){
            instance.appDynamic.ShowPageWorkflow();
        });
        let cell_link2 = document.getElementById("page-dashboard-cell2-link");
        cell_link2.addEventListener("click",function(e){
            instance.appDynamic.ShowPageWorkflow();
        });

    }
}


export {PageDashboard};