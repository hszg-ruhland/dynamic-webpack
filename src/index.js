/* app.js
   example Leaflet Map with webpack
   Klaus Ruhland, 22.01.2021
   use http://www.imageoptimizer.net for images
*/

import './theme/custom.css';
import './app/app-style.css';
import {app} from './app/App.js';

const global_pubkey_string = 
`-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALdAnDjUjgTFc39gEd/X08VJxBnRW2Wg
5BDyC0Y82aCiAHzpPNyx3ptQiX8sjNqA6+LxnCcp2EEVUHj4jOxMZAECAwEAAQ==
-----END PUBLIC KEY-----`;

document.addEventListener('DOMContentLoaded', init);

function init() {
      let text = "Hallo Klaus";
      app.Init();
/*      app.tools.LoadEncrypt(global_pubkey_string)
         .then( (encrypt) => {
            let encrypted = encrypt.encrypt(text);
            console.log(text+" encrypted=",encrypted);
         });

      console.log(text+" bs58=",app.tools.Bs58encode(text));
      let compressed = app.tools.Compress(text);
      let orginal = app.tools.Decompress(compressed);
      console.log(text+" pako=",text);

      let doTtemplate = "<h1>Hi {{=it.foo}}!</h1>";
      let object = {foo: 'there'};
      let templateResult = app.tools.Template(doTtemplate,object);
      console.log(text+" doT=",templateResult);
*/
      app.ShowPageLogin();
}
/*
if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/sustainable-spa-with-webpack/service-worker.js',{ scope: '/'}).then(registration => {
       console.log('SW registered: ', registration);
       init();
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
}
else {
   document.addEventListener('DOMContentLoaded', init);
}
*/