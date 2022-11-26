import { Component, OnInit } from '@angular/core';
import { LoginService } from '../api/login.service';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  callData:any;
  constructor(private Api:LoginService ) {

   }

   ngOnInit(): void {
   
    //this.login();
  }
  login() {
    console.log("testing..");

  this.Api.login().subscribe((data:any) => {
      //console.log("testcase...");
      console.log("****", data);
      this.callData = data["result"];

      if(data!=true)
      {
    
      }
      
    });
  }

//  public btnclick(){
//   this.router.navigate(['/registration']);
//  }
  
}
