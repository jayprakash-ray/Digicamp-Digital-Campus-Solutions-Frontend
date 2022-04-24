import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LostFoundService {

  constructor(private httpClient: HttpClient) { }

  public getItems(){
    return this.httpClient.get(`${baseUrl}/lost-found`);
  }

  public addItem(itemDetail: any){
    return this.httpClient.post(`${baseUrl}/lost-found`, itemDetail);
  }
}
