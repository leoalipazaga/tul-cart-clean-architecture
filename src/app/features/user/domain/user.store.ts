import { UserEntity } from ".";

export interface UserStore {
    userAuthenticated: UserEntity | null;
    isAuth: boolean;
    error: Error | null;
}