// npm packages used:
// jsencrypt : dynamic
// lz-string
// base-x
// safe-buffer
// leaflet
// micro-mustache


import { compress, decompress } from 'lz-string';

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
import Basex from 'base-x';
import { Buffer } from 'safe-buffer';

// encoding: utf8string ==> buffer = Buffer.from(utf8string,'utf8') ==> bs58string = bs58.encode(buffer)
// decoding: bs58string ===> buffer = bs58.decode(bs58string)  ====> utf8string = buffer.toString('utf8')

class Tools{
    constructor(){
        this.bs58 = new Basex(BASE58);
        this.Buffer = Buffer;
//        this.base58 = encoder('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
        this.compress = compress;
        this.decompress = decompress;
//        this.doT = doT;
        this.encrypt = null;
    }
    Init(){
        let test=1;
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
    Bs58encode(utf8text){
        let buf = this.Buffer.from(utf8text,'utf8');
        let bs58string = this.bs58.encode(buf);
        return bs58string;
    }
    Bs58decode(bs58text){
// decoding: bs58string ===> buffer = bs58.decode(bs58string)  ====> utf8string = buffer.toString('utf8')
        
        let buf = this.bs58.decode(bs58string);
        let utf8string = buf.toString('utf8');
        return utf8string;
    }
    Compress(text){
        return this.compress(text);
    }
    Decompress(compressed){
        return this.decompress(compressed);
    }
    Template(template_markup, object){
//        let template = doT.template(template_markup);
//        return template(object);
        return object;
    }
}

export {Tools};