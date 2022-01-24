import { Action } from '@ngrx/store';
import { UserEntity } from '../domain/user.entity';

const USER_FEATURE = '[USER]';

export const UserActions = {
    LOGIN: `${USER_FEATURE} LOGIN`,
    LOGIN_SUCCESS: `${USER_FEATURE} LOGIN SUCESS`,
    SIGNUP: `${USER_FEATURE} SIGNUP`,
    SIGNUP_SUCCESS: `${USER_FEATURE} SIGNUP SUCCESS`,
    LOGOUT: `${USER_FEATURE} LOGOUT`,
    USER_API_ERROR: `${USER_FEATURE} API_ERROR`,
}

export class LoginUser implements Action {
    type = UserActions.LOGIN;

    constructor(public payload: UserEntity) {}
}

export class LoginUserSuccess implements Action {
    type = UserActions.LOGIN_SUCCESS;

    constructor(public payload: UserEntity) {}
}

export class UserError implements Action {
    type = UserActions.USER_API_ERROR;

    constructor(public payload: Error) {}
}

export class LogoutUser implements Action {
    type = UserActions.LOGOUT;

    constructor() {}
}

export class SignupUser implements Action {
    type = UserActions.SIGNUP;

    constructor(public payload: UserEntity) {}
}

export class SignupUserSuccess implements Action {
    type = UserActions.SIGNUP_SUCCESS;

    constructor(public payload: UserEntity) {}
}

export type UserActionTypes = SignupUser
    | SignupUserSuccess
    | LoginUser
    | LoginUserSuccess
    | UserError
    | LogoutUser;