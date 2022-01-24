import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from "rxjs";

import { getAuth } from "firebase/auth";

import {UserEntity} from '../domain';

type AuthType = Pick<UserEntity, 'email' | 'password'>;

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private angularFireAuth: AngularFireAuth) {}

    public login(user: AuthType): Observable<any> {
        return from(this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password));
    }

    public logout(): Observable<void> {
        return from(getAuth().signOut());
    }

    public signup(user: AuthType): Observable<any> {
        return from(this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password));
    }
}