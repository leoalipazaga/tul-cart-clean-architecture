import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { CollectionsComponent } from './layout/collections/collections.component';
import { CartComponent } from './layout/cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    CollectionsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzBadgeModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzInputNumberModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class HomeModule { }
