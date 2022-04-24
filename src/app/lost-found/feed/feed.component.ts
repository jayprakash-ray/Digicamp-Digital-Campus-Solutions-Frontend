import { Component, OnInit } from '@angular/core';
import { LostFoundService } from 'src/app/_services/lost-found.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  items: any;
  constructor(public lfService: LostFoundService) { }

  ngOnInit(): void {
    this.lfService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

}
