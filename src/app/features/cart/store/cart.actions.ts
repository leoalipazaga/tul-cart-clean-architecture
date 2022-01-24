import { Action } from "@ngrx/store";
import { ProductEntity } from "../../product/domain/product.entity";

const CART_FEATURE = '[CART]';

const CART_ADD_ACTION = `${CART_FEATURE} ADD`;
const CART_REMOVE_ACTION = `${CART_FEATURE} REMOVE`;
const CART_UPDATE_QUANTITY = `${CART_FEATURE} UPDATE QUANTITY`;

export const CartActionsType = {
    CART_ADD: CART_ADD_ACTION,
    CART_REMOVE: CART_REMOVE_ACTION,
    CART_UPDATE_QUANTITY: CART_UPDATE_QUANTITY
}

export class AddItemAction implements Action {
    type = CART_ADD_ACTION;
    constructor(public payload: ProductEntity) {}
}

export class RemoveItemAction implements Action {
    type = CART_REMOVE_ACTION;
    constructor(public payload: number) {}
}

export class UpdateQuantityAction implements Action {
    type = CART_UPDATE_QUANTITY;
    constructor(public payload: number) {}
}

export type CartActions = AddItemAction | RemoveItemAction | UpdateQuantityAction;