import { ShoppingActions } from ".";
import { ShoppingEntity } from "../domain/shopping.entity";

const initialState: ShoppingEntity[] = [];

export function shoppingReducer(state = initialState, action: any) {
    switch (action.type) {
        case ShoppingActions.ADD_PRODUCT:
            return state.concat(action.payload);
        case ShoppingActions.REMOVE_PRODUCT:
            return state.filter(shopping => shopping.productId !== action.payload );
        default:
            return state;
    }
}