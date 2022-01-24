import { Action } from '@ngrx/store';
import { ShoppingEntity } from '../domain/shopping.entity';

const SHOPPING_FEATURE = '[SHOPPING]';

export const ShoppingActions = {
    ADD_PRODUCT: `${SHOPPING_FEATURE} ADD`,
    REMOVE_PRODUCT: `${SHOPPING_FEATURE} REMOVE`
}

export class AddProduct implements Action {
    type = `${SHOPPING_FEATURE} ADD`;

    constructor(public payload: ShoppingEntity) {}
}

export class RemoveProduct implements Action {
    type = `${SHOPPING_FEATURE} REMOVE`;

    constructor(public payload: number) {}
}

export type ShoppingActionTypes = AddProduct | RemoveProduct;