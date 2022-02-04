//import {TileLayer,Map,LatLng} from 'leaflet';
//import '../external/leaflet/dist/leaflet.css';
//import './page-map.css';
import {Page} from '../Page.js'

const page_map_markup =
`      
<div id="page-map" class="app-page">
    <nav class="app-header navbar bg-dark navbar-dark">
        <div class="container-fluid">
            <button id="page-map-back-button" class="app-header-back-button"></button>
            <a class="navbar-brand" href="#">Map</a>
        </div>
    </nav>
    <div class="map-area">
        <div class="leaflet-area"></div>
        <button id="page-map-change-view-button" class="map"></button>
    </div>
</div>
`;

const satellite_osmurl = 
"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const map_osmurl =
"https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png";
let actual_osmurl = satellite_osmurl;

//import '../external/leaflet/dist/leaflet.css';

class PageMap extends Page{
    constructor(){
        super("page-map");
        this.map_area = null;
        this.markup = page_map_markup;
        this.map = null;
        this.osmLayer = null;
    }

    Init(){
        let instance = this;
        let page_map = document.getElementById(this.id);

        if ( page_map === null ){
            document.body.insertAdjacentHTML('beforeend', this.markup);
            this.page = document.getElementById(this.id);

            instance.app.tools.LoadLeaflet()
                .then( (L) => {
                    instance.map_area = document.querySelector("#page-map .leaflet-area");
                    instance.osmLayer = new L.TileLayer(actual_osmurl);
                    let map = new L.Map(this.map_area);
                    instance.map = map;
                    map.addLayer(instance.osmLayer);  
                    map.setView(new L.LatLng(51.147990,14.997320), 14);            
                });
        }
    }


    Show(){
        if ( this.page === null ){
            this.Init();
            this.SetCallbacks();
        }
    }

    SetCallbacks(){
           // Set the callback for the button page-main-map-change-view-button
           let instance = this;
           let change_button = document.getElementById("page-map-change-view-button");
           change_button.addEventListener('click',function(e){
               if ( actual_osmurl === satellite_osmurl ){
                   actual_osmurl = map_osmurl;
                   change_button.classList.remove("map");
                   change_button.classList.add("sattelite");
               }
               else{
                   actual_osmurl = satellite_osmurl;
                   change_button.classList.remove("sattelite")
                   change_button.classList.add("map");
               }
               instance.osmLayer.setUrl(actual_osmurl);        
           });

           let back_button = document.getElementById("page-map-back-button");
           back_button.addEventListener("click",function(e){
               instance.RemoveFromDOM();
           });   
    }
}

export {PageMap};