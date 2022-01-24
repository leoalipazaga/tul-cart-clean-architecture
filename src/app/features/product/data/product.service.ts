import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';

import { products } from './data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularDatabase: AngularFireDatabase) {
  }

  fetchProducts() {
    return this.angularDatabase.list('/products').snapshotChanges();
  }

  fetchRawData(): Observable<any[]> {
    return of(products);
  }
}
