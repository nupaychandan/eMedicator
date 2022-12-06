import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptService {
  
  constructor() { }
  encKey = "We1c0mein10*";
  set(username : any){
    
    var key = CryptoJS.enc.Utf8.parse(this.encKey);
    var iv = CryptoJS.enc.Utf8.parse(this.encKey);
    var encrypted = CryptoJS.AES.encrypt(username.toString(), this.encKey,
    {
        iv:iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  get(username: any){
    var key = CryptoJS.enc.Utf8.parse(this.encKey);
    var iv = CryptoJS.enc.Utf8.parse(this.encKey);
    var decrypted = CryptoJS.AES.decrypt(username, this.encKey,
       {
        iv:iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}


