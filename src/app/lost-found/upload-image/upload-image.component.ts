import { Component, Input, OnInit } from '@angular/core';
import { FileUpload, FirebaseService } from 'src/app/_services/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  
  @Input() fileUpload!: FileUpload;
  @Input() imagePath: any;
  fileUploads?: any[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    // if (this.selectedFiles) {
    //   const file: File | null = this.selectedFiles.item(0);
    //   this.selectedFiles = undefined;
    //   if (file) {
    //     this.currentFileUpload = new FileUpload(file);
    //     this.firebaseService.pushFileToStorage(this.currentFileUpload, this.imagePath).subscribe(
    //       percentage => {
    //         this.percentage = Math.round(percentage ? percentage : 0);
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // }
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.firebaseService.deleteFile(fileUpload);
  }


}
