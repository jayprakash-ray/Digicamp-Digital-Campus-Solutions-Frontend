import { Component, OnInit, ViewChild } from '@angular/core';
import { LostFoundService } from 'src/app/_services/lost-found.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @ViewChild('gridView') gridView: any;
  items: any;
  constructor(public lfService: LostFoundService) { }

  ngOnInit(): void {
    this.lfService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }
        
// columnNum = 3;

// divSize = 900;

// setColNum(div: any){
//   console.log(div);
//   if(this.gridView.nativeElement.offsetWidth < 400){
//     this.columnNum = 1;
//   }
//   if(this.gridView.nativeElement.offsetWidth >= 400 
//       && this.gridView.nativeElement.offsetWidth < 800){
//     this.columnNum = 2;
//   }
//   if(this.gridView.nativeElement.offsetWidth >= 800){
//     this.columnNum = 3;
//   }
// }

}
