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

  public getMyPackages(id: any){
    return this.httpClient.get(`${baseUrl}/package/${id}`);
  }

  public addPackage(itemDetail: any){
    return this.httpClient.post(`${baseUrl}/package`, itemDetail);
  }
  public updatePackage(itemDetail: any){
    return this.httpClient.put(`${baseUrl}/package`, itemDetail);
  }

  public deletePackage(id: any){
    return this.httpClient.delete(`${baseUrl}/package/${id}`);
  }
}
