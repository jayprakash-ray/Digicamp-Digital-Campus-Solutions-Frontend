import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  signUp: boolean = false;
  sideBarOpen =true;
  constructor() { }

  ngOnInit(): void {
    console.log("HI")
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
