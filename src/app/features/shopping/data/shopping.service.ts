import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingStore } from '../domain/shopping.entity';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  static readonly SHOPPING_URL = '';

  constructor(private _httpClient: HttpClient) { }
  
  saveShopping(store: ShoppingStore) {
    this._httpClient.post(ShoppingService.SHOPPING_URL, { body: store.shopping });
  }

}
