import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  constructor() { }
  date: any;
  defaultImage = "https://firebasestorage.googleapis.com/v0/b/digicamp-backend.appspot.com/o/uploads%2FImage_not_available.png?alt=media&token=bb789927-94d9-438e-9d3c-bcdb12a1f613";
  ngOnInit(): void {
    this.date = this.formatDate(this.item.date);
    console.log("CARD ITEM: ", this.item);
  }

  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }


}
