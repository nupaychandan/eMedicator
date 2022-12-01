import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import {CryptService} from "./crypt.service"
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  callData:any;
  userName:any;
  passWord:any;
  errorMessage:any;
  constructor(private Api:LoginService,private router:Router,private crypto:CryptService ) {}


  ngOnInit(): void {
   
    //this.login();
    var encrypted = this.crypto.set('username');
    var decrypted = this.crypto.get(encrypted);
   
    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
  }
  login() {
    console.log("testing..");

  this.Api.login(this.userName, this.passWord).subscribe((data:any) => {
      console.log("testing", data);
      this.callData = data;
      if(this.callData.status)
      {
       console.log("****","Login Success");
       localStorage.setItem('username',this.userName);
       this.router.navigateByUrl('/dashboard');
       //document.write("Login successfully.");
      }
      else
      {
        console.log("****","Login failed");
        //document.write("Login failed.");
        this.errorMessage="Invalid username or password, Please try again...";

      }

    });
  }

//  public btnclick(){
//   this.router.navigate(['/registration']);
//  }
}

