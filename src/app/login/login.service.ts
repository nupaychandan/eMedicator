import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   
  constructor(private http:HttpClient) { }


  login(username:any, pwd: any){
    return this.http.post('http://43.204.142.146:8124/api/login',
    {
      "emailId":username,
      "password":pwd
    });
  }
}
