import { createSelector, select } from '@ngrx/store';

const getCart = (state: any) => state.cart;
// export const getCart = select((state: any) => state.cart);

export const selectCart = select(getCart);