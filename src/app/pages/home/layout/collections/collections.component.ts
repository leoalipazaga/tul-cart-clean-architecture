import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from 'src/app/features/cart/store';
import { ProductService } from 'src/app/features/product/data/product.service';
import { ProductEntity } from 'src/app/features/product/domain/product.entity';

@Component({
  selector: 'tul-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  items$!: Observable<any[]>;

  constructor(private readonly store: Store, private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.items$ = this.productService.fetchRawData();
  }


  onAddItem(product: ProductEntity): void {
    this.store.dispatch(new AddItemAction(product));
  }

}
