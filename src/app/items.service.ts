import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './model';
import { baseUrl } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]> {
    return this.http.get<Item[]>(baseUrl);
  }

  addItem(item:Item):Observable<Item[]> {
    return this.http.post<Item[]>(baseUrl,item);
  }

  editItem(item:Item):Observable<Item[]> {
    console.log("in the edit item");
    return this.http.put<Item[]>(baseUrl,item);
  }

  getItemById(id:string):Observable<Item> {
    return this.http.get<Item>(baseUrl + '/' + id);
  }

  deleteItemById(id:string):Observable<string> {
    console.log("in service deletion");
    return this.http.delete<string>(baseUrl + '/' + id);
  }
}
