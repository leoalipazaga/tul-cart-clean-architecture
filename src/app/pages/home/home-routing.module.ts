import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CartComponent } from './layout/cart/cart.component';
import { CollectionsComponent } from './layout/collections/collections.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      component: CollectionsComponent
    },
    {
      path: 'cart',
      component: CartComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
