import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pathToFileURL } from 'url';
import { getAuth, RecaptchaVerifier, onAuthStateChanged } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { WindowService } from '../_services/window.service';
// import * as firebase from 'firebase/compat';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  mobile1FormGroup: FormGroup;
  mobile2FormGroup: FormGroup;
  isOptional = false;
  emailNotValid = true;
  mobile1NotValid = true;
  mobile2NotValid = true;
  mobile1Verified = false;
  auth: any;

  otpSent: boolean = false
  phoneNumber = null;
  otp = null
  recaptchaVerifier: any;
  confirmationResult: any;
  windowRef: any;
  constructor(private _formBuilder: FormBuilder, 
    public windowService: WindowService) {
  }
  
  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
    
    this.nameFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
    });
    this.mobile1FormGroup = this._formBuilder.group({
      mobile: ['', Validators.required],
      otp: ['']
    });
    this.mobile2FormGroup = this._formBuilder.group({
      mobile: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
    });
  }


  ngAfterViewInit() {
    // const auth = getAuth();
    // this.windowRef.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //   'size': 'normal',
    //   'callback': (response: any) => {
    //     // reCAPTCHA solved, allow signInWithPhoneNumber.
    //     this.mobile1Verified = true;
    //   }
    // }, auth);

    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response: any) => {

        }
      });
      this.windowRef.recaptchaVerifier.render();
  }

  emailDomainCheck() {
    var parts = this.emailFormGroup.value.email.split('@');
    if (parts.length === 2 && parts[1] === 'iiitb.ac.in') {
      this.emailNotValid = false;
      return;
    }
    this.emailNotValid = true;
  }



  sendOtp(mobile: any) {
    firebase.auth().signInWithPhoneNumber('+91' + mobile, this.recaptchaVerifier)
      .then((confirmationResult: any) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        this.otpSent = true;
      }).catch((err: any) => {
        console.log(err)
      })

  }

  signIn() {

    // this.confirmationResult.confirm(this.otp).then(user=>{

    // console.log(user)

  }

}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

