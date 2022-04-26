import {ToolsStatic} from '../lib/ToolsStatic';
import {ToolsDynamic} from '../lib/ToolsDynamic';
//import {PageMap} from './pages/PageMap.js';

class App{
    public toolsStatic;
    public toolsDynamic;
    public pageMap;
    public pageLogin;
    public pageDashboard;
    public pageWorkflow;

    public bootstrap;
    
    constructor(){
        this.toolsStatic = new ToolsStatic();
        this.toolsDynamic = new ToolsDynamic();
        this.pageMap = null;
        this.pageLogin = null;
        this.pageDashboard = null;
        this.pageWorkflow = null;
    }
    Init(){
        let test=1;
        this.toolsStatic.Init();
    }
    ShowPageMap(){
        let instance = this;
        if ( this.pageMap === null ){
            import( /* webpackChunkName: "app" */ './pages/page-map/page-map.scss');
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
            import( /* webpackChunkName: "btcss" */ '../theme/custom.scss');//bootstrap/dist/css/bootstrap.min.css');
            import( /* webpackChunkName: "btsrc" */ 'bootstrap').then( (bootstrapModule) => {
                this.bootstrap = bootstrapModule;
                import( /* webpackChunkName: "app" */ './pages/page-dashboard/page-dashboard.scss');
                import( /* webpackChunkName: "app" */ './pages/page-dashboard/PageDashboard.js').then( (appModule) => {
                    this.pageDashboard = new(appModule.PageDashboard);
                    this.pageDashboard.SetApp(instance);
                    this.pageDashboard.Show();     
                });
            });
        }
        else {
            this.pageDashboard.Show();     
        }
    }
    ShowPageLogin(){
        let instance = this;
        if ( this.pageLogin === null ){
            import( /* webpackChunkName: "app" */ './pages/page-login/page-login.scss');
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
            import( /* webpackChunkName: "app" */ './pages/page-workflow/page-workflow.scss');
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