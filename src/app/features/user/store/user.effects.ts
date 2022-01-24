import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { SignupUser } from ".";

import { UserService } from '../data';
import { UserEntity } from "../domain";
import { LoginUser, UserError, LoginUserSuccess, LogoutUser, UserActions, SignupUserSuccess } from '../store/user.actions';

@Injectable()
export class UserEffects {
    login$ = createEffect(() => this.actions$.pipe(
        ofType<LoginUser>(UserActions.LOGIN),
        switchMap((action) => this.userService.login(action.payload).pipe(
            // API SUCCESS
            map((user: UserEntity) => new LoginUserSuccess(user)),
            // API ERROR
            catchError((error: Error) => of(new UserError(error || new Error('There was an error'))))
        ))
    ));

    signup$ = createEffect(() => this.actions$.pipe(
        ofType<SignupUser>(UserActions.SIGNUP),
        mergeMap((action) => this.userService.signup(action.payload).pipe(
            // API SUCCESS
            map((user: UserEntity) => new SignupUserSuccess(user)),
            // API ERROR
            catchError((error: Error) => of(new UserError(error || new Error('There was an error'))))
        ))
    ));

    logout$ = createEffect(() => this.actions$.pipe(
        ofType<LogoutUser>(UserActions.LOGOUT),
        mergeMap(() => this.userService.logout().pipe(
            // API SUCCESS
            map(() => new LogoutUser()),
            // API ERROR
            catchError((error: Error) => of(new UserError(error || new Error('There was an error'))))
        ))
    ));
    
    constructor(private readonly actions$: Actions, private readonly userService: UserService) { }
}