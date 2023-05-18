import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType:String = "default";
  constructor(private router:Router){}

  ngOnInit(): void {

    this.router.events.subscribe((val:any) => {
      // console.warn(val.url);
      if (val.url) {
        console.warn(val.url);

        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("in seller area");
          this.menuType = "seller";
        }else{
          console.warn("outside seller ");
          this.menuType = "default";

        }
      }

    })
  }
}