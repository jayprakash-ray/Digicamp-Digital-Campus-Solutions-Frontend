import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailAuthenticationService {

  constructor(private http:HttpClient) { }
  
  // sendEmail(data:any)
  // {
  //     return this.http.post(`${baseUrl}/sendemail`,data)
  // }

  getOTP(id: any, email: any)
  {
      return this.http.get(`${baseUrl}/OTP/${id}/${email}`);
  }

  sendOTP(otp: any){
    return this.http.post(`${baseUrl}/OTP`, otp);  
  }


}

