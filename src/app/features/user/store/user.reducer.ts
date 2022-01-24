import { UserStore } from '../domain';
import { UserActions } from './user.actions';

const initialState: UserStore = {
    isAuth: false,
    userAuthenticated: null,
    error: null
};

export function userReducer(state = initialState, action: any): UserStore {
    switch(action.type) {
        case UserActions.LOGIN_SUCCESS:
            return { ...state, isAuth: true, userAuthenticated: action.payload.user, error: null };
        case UserActions.LOGOUT:
            return { ...state, isAuth: false, userAuthenticated: null };
        case UserActions.USER_API_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}