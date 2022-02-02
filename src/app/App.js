import {Tools} from '../lib/Tools.js';
//import {PageMap} from './pages/PageMap.js';

class App{
    constructor(){
        this.tools = new Tools();
        this.pageMap = null;
        this.pageLogin = null;
        this.pageDashboard = null;
        this.pageWorkflow = null;
    }
    Init(){
        let test=1;
        this.tools.Init();
    }
    ShowPageMap(){
        let instance = this;
        if ( this.pageMap === null ){
            import( /* webpackChunkName: "app" */ './pages/page-map/page-map.css');
            import( /* webpackChunkName: "app" */ './pages/page-map/PageMap.js').then( (appModule) => {
                this.pageMap = new(appModule.PageMap);
                this.pageMap.SetApp(instance);
                this.pageMap.Show();     
            });
        }
        else {
            this.pageMap.Show();     
        }
    }
    ShowPageDashboard(){
        let instance = this;
        if ( this.pageDashboard === null ){
            import( /* webpackChunkName: "app" */ './pages/page-dashboard/page-dashboard.css');
            import( /* webpackChunkName: "app" */ './pages/page-dashboard/PageDashboard.js').then( (appModule) => {
                this.pageDashboard = new(appModule.PageDashboard);
                this.pageDashboard.SetApp(instance);
                this.pageDashboard.Show();     
            });
        }
        else {
            this.pageDashboard.Show();     
        }
    }
    ShowPageLogin(){
        let instance = this;
        if ( this.pageLogin === null ){
            import( /* webpackChunkName: "app" */ './pages/page-login/page-login.css');
            import( /* webpackChunkName: "app" */ './pages/page-login/PageLogin.js').then( (appModule) => {
                this.pageLogin = new(appModule.PageLogin);
                this.pageLogin.SetApp(instance);
                this.pageLogin.Show();     
            });
        }
        else {
            this.pageLogin.Show();     
        }
    }
    ShowPageWorkflow(){
        let instance = this;
        if ( this.pageWorkflow === null ){
            import( /* webpackChunkName: "app" */ './pages/page-workflow/page-workflow.css');
            import( /* webpackChunkName: "app" */ './pages/page-workflow/PageWorkflow.js').then( (appModule) => {
                this.pageWorkflow = new(appModule.PageWorkflow);
                this.pageWorkflow.SetApp(instance);
                this.pageWorkflow.Show();     
            });
        }
        else {
            this.pageWorkflow.Show();     
        }
    }
}

let app = new App;
export {app};