import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from 'src/app/_interfaces/Item';
import { LostFoundService } from 'src/app/_services/lost-found.service';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  base64textString: any;
  imagePath: any;

  constructor(private _sanitizer: DomSanitizer, public lostAndFoundService: LostFoundService) { }

  ngOnInit(): void {
  }

  item: Item = ({} as any) as Item;

  submitFound(foundItem: any) {
    this.item.itemName = foundItem.value.name;
    this.item.date = foundItem.value.date;
    this.item.foundAt = foundItem.value.foundAt;
    this.item.itemImage = this.base64textString;
    this.item.lostOrFound = 1;
    this.item.remarks = foundItem.value.remark;
    this.item.collectFrom = foundItem.value.collectFrom;

    console.log("this.item: ", this.item);
    this.lostAndFoundService.addItem(this.item).subscribe(res => {
      console.log("Found Item Added: ", res);
    })
  }


  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }


  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    //Base 64 to image
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + btoa(binaryString));
  }

}
