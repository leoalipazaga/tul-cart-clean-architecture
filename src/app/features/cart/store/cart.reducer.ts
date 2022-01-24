import { CartActionsType } from ".";
import { ProductEntity } from "../../product/domain/product.entity";

const initialState: ProductEntity[] = [];

export function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case CartActionsType.CART_ADD:
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                const quantity = state[index].quantity + action.payload.quantity;
                const total = (quantity * action.payload.price).toFixed(2);
                const updatedProduct = {
                    ...state[index],
                    quantity,
                    total: +total
                };
                const copyState = [...state];
                copyState.splice(index, 1, updatedProduct);
                return copyState;
            }
            return state.concat({ ...action.payload, total: action.payload.price * action.payload.quantity });
        case CartActionsType.CART_UPDATE_QUANTITY:
            return state.map((item: any) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity, total: (action.payload.quantity * item.price).toFixed(2)  } : item);
        case CartActionsType.CART_REMOVE:
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
}