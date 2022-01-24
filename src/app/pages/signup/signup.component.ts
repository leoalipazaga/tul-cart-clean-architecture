import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserStore } from 'src/app/features/user/domain';
import { SignupUser } from 'src/app/features/user/store';

@Component({
  selector: 'tul-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private readonly store: Store<UserStore>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public onSignup(): void {
    this.store.dispatch(new SignupUser(this.form.value));
    this.onLogin();
  }

  public onLogin(): void {
    this.router.navigate(['/login']);
  }

}
