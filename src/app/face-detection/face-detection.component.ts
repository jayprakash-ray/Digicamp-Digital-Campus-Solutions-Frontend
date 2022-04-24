import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent implements OnInit {

  constructor() { }


  videoRef: any;
  ngOnInit(): void {
    this.videoRef = document.getElementById("video");
    // Promise.all([
    //   faceapi.nets.tnyFaceDetector.lodFro
    // ]);
    this.startCamera();

  }

  startCamera(){
    navigator.mediaDevices.getUserMedia({
      video: {},
      audio: false
    }).then(stream => {
      console.log(stream);
      this.videoRef.srcObject = stream;
    })
  }

  stopCamera(){
    navigator.mediaDevices.getUserMedia({
      video: false,
      audio: false
    }).then(stream => {
      this.videoRef.srcObject = {};
      console.log(stream);
    })
  }

}
