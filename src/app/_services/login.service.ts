import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tempToken: string = "";
  requestHeaders = new HttpHeaders(
    { "No-Auth":"True" }
  );

  constructor(private httpClient: HttpClient,
              private AuthService: AuthService) { }

  public login(loginData: any){
    return this.httpClient.post(`${baseUrl}/authenticate`, loginData, { headers: this.requestHeaders });
  }

  public roleMatch(allowedRole: string): boolean{
    const role: string = this.AuthService.getRole();
    if(role!==null && role && role===allowedRole){
      return true;
    }
    return false;
  }

  public updatePassword(id: any, password: any){
    if(this.tempToken==='') return null;
    const response = this.httpClient.put(`${baseUrl}/doctor/${id}`, password, {headers: new HttpHeaders(
      { "Authorization":`Bearer ${this.tempToken}`,
        "No-Auth":"True" }
    )});
    this.tempToken = "";
    return response;
  }

  public createUser(userData: any){
    return this.httpClient.post(`${baseUrl}/user`, userData);
  }

  public getAllUsers(){
    return this.httpClient.get(`${baseUrl}/user`);
  }
}
