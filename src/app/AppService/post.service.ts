import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  get_APIdata()
  {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
