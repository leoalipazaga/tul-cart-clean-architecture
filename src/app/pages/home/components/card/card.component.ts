import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductEntity } from 'src/app/features/product/domain/product.entity';

@Component({
  selector: 'tul-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item!: ProductEntity;
  @Output() onAddToCart: EventEmitter<ProductEntity> = new EventEmitter();
  public form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quantity: [1, []]
    });
  }

  onAddItem(): void {
    this.onAddToCart.emit({...this.item, ...this.form.value});
  }

}
