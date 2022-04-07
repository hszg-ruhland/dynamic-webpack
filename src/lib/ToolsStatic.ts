// npm packages used:
// jsencrypt : dynamic
// lz-string
// base-x
// safe-buffer
// leaflet
// micro-mustache


import { compress, decompress } from 'lz-string';
const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
import * as baseX from 'base-x';
import { Buffer } from 'safe-buffer';

// encoding: utf8string ==> buffer = Buffer.from(utf8string,'utf8') ==> bs58string = bs58.encode(buffer)
// decoding: bs58string ===> buffer = bs58.decode(bs58string)  ====> utf8string = buffer.toString('utf8')

class ToolsStatic{
    public Buffer;
    public compress;
    public decompress;
    public bs58;

    constructor(){
        this.bs58 =  baseX(BASE58);
        this.Buffer = Buffer;
        this.compress = compress;
        this.decompress = decompress;
    }
    Init(){
        let test=1;
    }
    Bs58encode(utf8text){
        let buf = this.Buffer.from(utf8text,'utf8');
        let bs58string = this.bs58.encode(buf);
        return bs58string;
    }
    Bs58decode(bs58text){
        let buf = this.bs58.decode(bs58text);
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
        return object;
    }
}

export {ToolsStatic};