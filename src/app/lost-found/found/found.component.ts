import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from 'src/app/_interfaces/Item';
import { FileUpload, FirebaseService } from 'src/app/_services/firebase.service';
import { LostFoundService } from 'src/app/_services/lost-found.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {
  base64textString: any;
  imagePath: any;
  item: Item = ({} as any) as Item;
  returnedObj: any;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fileUploads?: any[];

  constructor(private _sanitizer: DomSanitizer, private firebaseService: FirebaseService, public lostAndFoundService: LostFoundService) { }

  ngOnInit(): void {
  }


  submitFound(foundItem: any) {
    this.item.itemName = foundItem.value.name;
    this.item.date = foundItem.value.date;
    this.item.foundAt = foundItem.value.foundAt;
    this.item.lostOrFound = 1;
    this.item.remarks = foundItem.value.remark;
    this.item.collectFrom = foundItem.value.collectFrom;
    this.lostAndFoundService.addItem(this.item).subscribe((res) => {
      console.log("Item Added: ", res);
      this.returnedObj = res;
      this.upload();
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.handleFileSelect(event);
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.firebaseService.pushFileToStorage(this.currentFileUpload, this.imagePath, this.returnedObj)
          .subscribe(
            percentage => {
              this.percentage = Math.round(percentage ? percentage : 0);
          },
            (error: any) => {
              console.log(error);
            }
          );
      }
    }
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