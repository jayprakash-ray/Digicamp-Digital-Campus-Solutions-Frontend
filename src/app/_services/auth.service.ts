import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setId(id: any){
    localStorage.setItem("id", id);
  }

  public getId(): any{
    return localStorage.getItem("id");
  }

  public setRole(role: string){
    localStorage.setItem("role", role);
  }

  public getRole(): any{
    return localStorage.getItem("role");
  }

  public setName(name: any){
    localStorage.setItem("name", name);
  }

  public getName(): any{
    return localStorage.getItem("name");
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): any{
    return localStorage.getItem("jwtToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    console.log("Is Login: ", this.getRole());
    return this.getRole() && this.getToken();
  }
}
