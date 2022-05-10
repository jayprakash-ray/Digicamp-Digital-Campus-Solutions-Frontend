import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LostFoundService } from 'src/app/_services/lost-found.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  constructor(public lfService: LostFoundService) { }
  date: any;
  // defaultImage = '.';
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

  hasImage: boolean = false;
  zoomImage() {
    Swal.fire({
      title: `${this.item.itemName}`,
      // text: 'Modal with a custom image.',
      imageUrl: `${this.item.itemImage}`,
      imageWidth: 1000,
      // imageHeight: 500,
      imageAlt: 'image',
      text: `${this.item.remarks}`,
    })
  }

  checkImage(url: any) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = () => {
      // status = request.status;
      if (request.status == 200) //if(statusText == OK)
      {
        console.log("image exists");
        // this.hasImage = true;
        this.hasImage = true;
        return true;
      } else {
        console.log("image doesn't exist");
        return false;
      }
    }
    // console.log("request.onload: ", request.onload);
  }

  collectItem() {
    this.item.isCollected = 1;
    this.lfService.updateItem(this.item, this.item.itemId).subscribe(
      (res: any) => {
        Swal.fire(
          'Item Collected!',
          '',
          'success'
        )
      },
      (error: any) => {
        Swal.fire(
          'Fail to Collect Item!',
          `${error.message}`,
          'error'
        )
      })
  }
}


