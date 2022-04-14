// npm packages used:
// jsencrypt : dynamic
// lz-string
// base-x
// safe-buffer
// leaflet
// micro-mustache

class ToolsDynamic{
    public encrypt;
    public bootstrap;
    constructor(){
        this.encrypt = null;
        this.bootstrap = null;
    }
    LoadEncrypt(pubkey){
        let instance = this;
        return import( /* webpackChunkName: "encrypt" */ 'jsencrypt')
            .then( (encryptModule) => {
                if (instance.encrypt === null ){
                    instance.encrypt = new(encryptModule.JSEncrypt);
                    instance.encrypt.setPublicKey(pubkey);
                }
                return instance.encrypt;
            })
            .catch( (err) => {
                return err;
            });
    }
    LoadLeaflet(){
        import( /* webpackChunkName: "leaflet" */ 'leaflet/dist/leaflet.css');
        return import( /* webpackChunkName: "leaflet" */ 'leaflet')
            .then( (leafletModule) => {
                const L = leafletModule.default;
                return L;
            })
            .catch( (err) => {
                return err;
            });
    }
}

export {ToolsDynamic};