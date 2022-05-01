import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from 'src/app/_interfaces/Item';
import { LostFoundService } from 'src/app/_services/lost-found.service';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer, public lostAndFoundService: LostFoundService) { }

  ngOnInit(): void {
  }

  item: Item = ({} as any) as Item;
  submitLost(lostItem: any){
    this.item.itemName = lostItem.value.name;
    this.item.date = lostItem.value.date;
    this.item.foundAt = lostItem.value.foundAt;
    this.item.itemImage = this.base64textString;
    this.item.lostOrFound = 0;
    this.item.remarks = lostItem.value.remark;

    console.log("this.item: ", this.item);
    this.lostAndFoundService.addItem(this.item).subscribe(res => {
      console.log("Lost Item Added: ", res);
    })
  }

  base64textString: any;
  imagePath: any;

  handleFileSelect(evt: any){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}


_handleReaderLoaded(readerEvt: any) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);

          console.log(btoa(binaryString));

          //Base 64 to image
          this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + btoa(binaryString));
  }

}
