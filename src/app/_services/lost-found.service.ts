import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Item } from '../_interfaces/Item';

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

  public updateItem(itemDetail: any, itemId: any){
    console.log("itemDetail: ", itemDetail);
    return this.httpClient.put(`${baseUrl}/lost-found/${itemId}`, itemDetail);
  }
}
