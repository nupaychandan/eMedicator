import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  navigateAndHighlight(strMenu: any){
    console.log("******", strMenu)
    //if(strMenuName == "Home") {
      const allMenu = document.querySelectorAll(".menu")
      allMenu.forEach(ele =>  {
        ele.classList.remove('mm-active');
      });
      const homeElement = document.getElementById(strMenu)
      console.log("*****", homeElement)
      homeElement?.classList.add('mm-active')
      // navigate to route
    //}
  }
  }

