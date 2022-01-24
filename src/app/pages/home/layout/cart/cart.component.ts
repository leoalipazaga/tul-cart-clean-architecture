import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveItemAction, UpdateQuantityAction } from '../../../../features/cart/store';

@Component({
  selector: 'tul-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listOfData$ = this.store.select((state: any) => state.cart);

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
  
  }

  onRemoveItem(id: number): void  {
    this.store.dispatch(new RemoveItemAction(id));
  }

  onUpdateQuantity(...data: any): void {
    const [currentQuantity, product] = data;
    const updatedProduct = {...product, quantity: currentQuantity};
    this.store.dispatch(new UpdateQuantityAction(updatedProduct));
  }

}
