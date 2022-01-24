import { Action } from "@ngrx/store";
import { ProductEntity } from "../domain/product.entity";

const PRODUCT_FEATURE = '[PRODUCT]';

// document action
export const ADD_PRODUCT = `${PRODUCT_FEATURE} ADD`;

// command action
export const FETCH_PRODUCT = `${PRODUCT_FEATURE} FETCH`;

// event action
export const FETCH_PRODUCT_ERROR = `${PRODUCT_FEATURE} API ERROR`;
export const FETCH_PRODUCT_SUCCESS = `${PRODUCT_FEATURE} API SUCCESS`;

export class FetchProductsAction implements Action {
    type = FETCH_PRODUCT;
    constructor() {}
}

export class FetchProductsSuccessAction implements Action {
    type = FETCH_PRODUCT_SUCCESS;
    constructor(public payload: ProductEntity) {}
}

export type ProductActions = FetchProductsAction | FetchProductsSuccessAction;