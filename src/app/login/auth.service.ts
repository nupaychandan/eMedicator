import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  login(userName:any,passWord:any){
    if(userName=="pooja83itdiploma@gmail.com" && passWord=="123566"){
      localStorage.setItem('username',"pooja83itdiploma@gmail.com");
      return true;
    }
    else
    {
      return false;
    }
  }
}
