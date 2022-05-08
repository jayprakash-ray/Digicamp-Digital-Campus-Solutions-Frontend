import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from 'src/app/_interfaces/Item';
import { FileUpload, FirebaseService } from 'src/app/_services/firebase.service';
import { LostFoundService } from 'src/app/_services/lost-found.service';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {
  base64textString: any;
  imagePath: any;
  item: Item = ({} as any) as Item;
  returnedObj: any;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fileUploads?: any[];
  @Output() changeTab = new EventEmitter<string>();
  constructor(private _sanitizer: DomSanitizer, private firebaseService: FirebaseService, public lostAndFoundService: LostFoundService) { }

  ngOnInit(): void {
  }

  submitLost(lostItem: any){
    this.item.itemName = lostItem.value.name;
    this.item.date = lostItem.value.date;
    this.item.foundAt = lostItem.value.foundAt;
    this.item.lostOrFound = 0;
    this.item.remarks = lostItem.value.remark;

    console.log("this.item: ", this.item);
    this.lostAndFoundService.addItem(this.item).subscribe(res => {
      console.log("Lost Item Added: ", res);
      this.returnedObj = res;
      this.upload();
      this.changeTabFunction("feed");
    })
  }
  
  changeTabFunction(value: string) {
    this.changeTab.emit(value);
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
              // this.changeTabFunction("feed");
            },
            (error: any) => {
              console.log(error);
            }
          );
      }else{
        // this.changeTabFunction("feed");
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