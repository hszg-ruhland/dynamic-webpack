import {ToolsDynamic} from '../lib/ToolsDynamic';
import {PageMap} from './pages/page-map/PageMap';
import {PageDashboard} from './pages/page-dashboard/PageDashboard';
import {PageWorkflow} from './pages/page-workflow/PageWorkflow';
import 'bootstrap';
import '../theme/custom.scss';

import './pages/page-map/page-map.scss';
import './pages/page-dashboard/page-dashboard.scss';
import './pages/page-workflow/page-workflow.scss';


class AppDynamic{
    public toolsDynamic: ToolsDynamic;
    public pageMap: PageMap;
    public pageDashboard: PageDashboard;
    public pageWorkflow: PageWorkflow;
    public appStatic = null;
    
    constructor(){
        this.toolsDynamic = new ToolsDynamic();
        this.pageMap = null;
        this.pageDashboard = null;
        this.pageWorkflow = null;
        this.appStatic = null;
    }
    Init(){
    }
    SetAppStatic(appStatic){
        this.appStatic = appStatic;
    }
    ShowPageMap(){
        let instance = this;
        if ( this.pageMap === null ){
                this.pageMap = new(PageMap);
                this.pageMap.SetAppDynamic(instance);
                this.pageMap.SetAppStatic(this.appStatic);
                this.pageMap.Show();
        }
        else {
            this.pageMap.Show();     
        }
    }
    ShowPageDashboard(){
        let instance = this;
        if ( instance.pageDashboard === null ){
            instance.pageDashboard = new(PageDashboard);
            instance.pageDashboard.SetAppDynamic(instance);
            instance.pageDashboard.SetAppStatic(this.appStatic);
            instance.pageDashboard.Show();     
        }
        else {
            instance.pageDashboard.Show();     
        }        
    }
    ShowPageWorkflow(){
        let instance = this;
        if ( this.pageWorkflow === null ){
            this.pageWorkflow = new(PageWorkflow);
            this.pageWorkflow.SetAppDynamic(instance);
            this.pageWorkflow.SetAppStatic(this.appStatic);
            this.pageWorkflow.Show();     
        }
        else {
            this.pageWorkflow.Show();     
        }
    }
}

export {AppDynamic};