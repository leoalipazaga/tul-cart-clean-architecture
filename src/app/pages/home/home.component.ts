import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { LogoutUser } from '../../features/user/store';

@Component({
  selector: 'tul-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartLenght$!: Observable<any>;
  isAuth$!: Observable<boolean>;
  
  constructor(
    private readonly router: Router,
    private readonly store: Store
    ) { }
    
  ngOnInit(): void {
    this.cartLenght$ = this.store.select((state: any) => state.cart).pipe(map(cart => cart.reduce((acc: number, curr: any) => acc = acc + curr.quantity, 0)));
    this.isAuth$ = this.store.select((state: any) => state.user).pipe(map(user => user.isAuth));
  }

  public goToCart() {
    this.router.navigate(['/home', 'cart']);
  }

  public goToHome() {
    this.router.navigate(['/home']);
  }

  public goToLogin() {
    this.router.navigate(['/login']);
  }

  public goToLogout() {
    this.store.dispatch(new LogoutUser());
    this.router.navigate(['/login']);
  }

}
