import { Component, OnInit } from '@angular/core';
import { LostFoundService } from '../_services/lost-found.service';


@Component({
  selector: 'app-lost-found',
  templateUrl: './lost-found.component.html',
  styleUrls: ['./lost-found.component.css']
})
export class LostFoundComponent implements OnInit {
  tabIndex = 0;
  items: any;
  notCollectedItems: any;
  constructor(public lfService: LostFoundService) { }

  ngOnInit(): void {
    this.getItems()
  }
  
  changeTab(){
    console.log("Change Tab", this.tabIndex);
    this.tabIndex = 0;
  }

  reloadFeed(evt: any){
    this.getItems()
  }
  
  getItems(){
    this.lfService.getNotCollectedItems().subscribe(items => {
      this.items = items;
      console.log("Get Items: ");
    })

  }
}
