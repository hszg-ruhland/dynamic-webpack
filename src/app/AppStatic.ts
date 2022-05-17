// AppStatic - the static part of the app

import {ToolsStatic} from '../lib/ToolsStatic';
import {PageLogin} from './pages/page-login/PageLogin';
import "./pages/page-login/page-login.scss";

class AppStatic{
    public toolsStatic: ToolsStatic;
    public pageLogin: PageLogin;
    public appDynamic;
    
    constructor(){
        this.toolsStatic = new ToolsStatic();
        this.pageLogin = new PageLogin();
        this.appDynamic = null;
    }
    Init(){
        this.toolsStatic.Init();
    }
    LoadAppDynamic(){
        let instance = this;
        if ( this.appDynamic === null ){
            import( /* webpackChunkName: "app" */ './AppDynamic').then( (appdynamicModule) => {
                this.appDynamic = new(appdynamicModule.AppDynamic);
                this.appDynamic.SetAppStatic(instance);
                this.appDynamic.ShowPageDashboard();
            });
        }
    }
    ShowPageLogin(){
        let instance = this;
        this.pageLogin.SetAppStatic(instance);
        this.pageLogin.Show();     
    }
}

let appStatic = new AppStatic;
export {appStatic};