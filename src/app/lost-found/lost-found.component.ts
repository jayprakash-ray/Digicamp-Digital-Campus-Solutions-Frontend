import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lost-found',
  templateUrl: './lost-found.component.html',
  styleUrls: ['./lost-found.component.css']
})
export class LostFoundComponent implements OnInit {
  tabIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  changeTab(){
    console.log("Change Tab", this.tabIndex);
    this.tabIndex = 0;
  }
}
