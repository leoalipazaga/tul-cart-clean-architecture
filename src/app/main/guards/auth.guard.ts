import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly store: Store, private readonly router: Router) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select((state: any) => state.user).pipe(map(user => user.isAuth), tap((isAuth) => !isAuth && this.router.navigate(['/login'])));
    // return true;
  }

  canLoad() {
    // return true;
    return this.store.select((state: any) => state.user).pipe(map(user => user.isAuth), tap((isAuth) => !isAuth && this.router.navigate(['/login'])));
  }
  
}
