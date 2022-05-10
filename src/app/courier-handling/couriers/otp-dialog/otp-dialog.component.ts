import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OTP } from 'src/app/_interfaces/OTP';
import { EmailAuthenticationService } from 'src/app/_services/email-authentication.service';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.scss']
})
export class OtpDialogComponent implements OnInit {
  otpFormGroup: any;
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
