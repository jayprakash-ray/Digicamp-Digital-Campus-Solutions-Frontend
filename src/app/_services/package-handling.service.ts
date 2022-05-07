import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageHandlingService {

  constructor(private httpClient: HttpClient) { }

  public getPackages(){
    return this.httpClient.get(`${baseUrl}/package`);
  }

  public addPackage(itemDetail: any){
    return this.httpClient.post(`${baseUrl}/package`, itemDetail);
  }

  public updatePackage(itemDetail: any){
    return this.httpClient.put(`${baseUrl}/package`, itemDetail);
  }
 
}
