import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Component, Input, OnInit } from '@angular/core';
import { LostFoundService } from 'src/app/_services/lost-found.service';
import { Item } from "src/app/_interfaces/Item";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() items: any;
  constructor() { }

  ngOnInit(): void {
    // this.getItems();
  }

  // getItems(){
  //   this.lfService.getItems().subscribe(items => {
  //     this.items = items;
  //     console.log("items: ", items);
  //   })
  // }


// // Create a reference to the file we want to download
// const storage = getStorage();
// const starsRef = ref(storage, 'images/stars.jpg');

// // Get the download URL
// getDownloadURL(starsRef)
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//   })
//   .catch((error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/object-not-found':
//         // File doesn't exist
//         break;
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect the server response
//         break;
//     }
//   });

}
