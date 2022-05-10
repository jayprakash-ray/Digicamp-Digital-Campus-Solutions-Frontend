import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pathToFileURL } from 'url';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { WindowService } from '../_services/window.service';
import { Role } from '../_interfaces/Role';
import { User } from '../_interfaces/User';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../_services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import * as firebase from 'firebase/compat';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/database';


import { Router, RouterLink } from '@angular/router';

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
  passwordFormGroup: FormGroup;
  isOptional = false;
  emailNotValid = true;
  mobile1NotValid = true;
  mobile2NotValid = true;
  mobile1Verified = false;
  isPasswordValid = false;
  isConfirmPasswordValid = false;
  auth: any;

  otpSent: boolean = false
  phoneNumber = null;
  otp = null
  recaptchaVerifier: any;
  confirmationResult: any;
  windowRef: any;

  user: User = ({} as any) as User;
  role: Role = ({} as any) as Role;
  constructor(private _formBuilder: FormBuilder, 
    public windowService: WindowService,
    public loginService: LoginService,
    private route:Router) {
  }
  
  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
    
    this.nameFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      rollNumber: ['', Validators.required]
    });
    this.mobile1FormGroup = this._formBuilder.group({
      mobile: ['', Validators.required],
    });
    this.mobile2FormGroup = this._formBuilder.group({
      mobile: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
    });
    this.passwordFormGroup = this._formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
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

  checkPassword(){
    if(this.passwordFormGroup.value.password.length>7){
      this.isPasswordValid = true;
      return;
    }
    this.isPasswordValid = false;
  }

  confirmPassword(){
    if(this.passwordFormGroup.value.password===this.passwordFormGroup.value.confirmPassword){
      this.isConfirmPasswordValid = true;
      return;
    }
    this.isConfirmPasswordValid = false;
  }
  
  createAccount(){
    this.role.roleName = 'student';
    this.user.userId = this.emailFormGroup.value.email;
    this.user.name = this.nameFormGroup.value.name;
    this.user.mobile1 = this.mobile1FormGroup.value.mobile;
    this.user.mobile2 = this.mobile2FormGroup.value.mobile;
    this.user.rollNumber = this.nameFormGroup.value.rollNumber;
    this.user.password = this.passwordFormGroup.value.password;
    this.user.role = this.role;

    this.loginService.createUser(this.user).subscribe( (res: any) => {
      console.log("user create");
      // Swal.fire(
      //   'User Created!',
      //   '',
      //   'success'
      // )
      this.route.navigate(['/login']);
    }, (error: any) => {
      console.log(error);
      // Swal.fire(
      //   'Error!',
      //   `${error.message}`,
      //   'error'
      // )
    })

  }
}


