import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, filter, Observable, Subject, Subscription } from 'rxjs';
import { LoginUser } from '../../features/user/store/user.actions';

@Component({
  selector: 'tul-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public onLogin = new Subject();
  private onLogin$ = this.onLogin.asObservable();
  private subscriptions: Subscription[] = [];
  private isAuth$: Observable<boolean> = this.store.select((state: any) => state.user.isAuth);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
    this.subscriptions.push(this.onLogin$.pipe(debounceTime(500)).subscribe(this.loginUser.bind(this)));
    this.subscriptions.push(this.isAuth$.pipe(filter(Boolean)).subscribe(this.goToHome.bind(this)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(this.unsubcribe);
  }

  public loginUser(): void {
    this.store.dispatch(new LoginUser(this.form.value));
  }

  public onRegister(): void {
    this.router.navigate(['/signup']);
  }
  
  private goToHome(): void {
    this.router.navigate(['/home']);
  }

  private unsubcribe(subscription: Subscription) {
    subscription.unsubscribe();
  }

}
