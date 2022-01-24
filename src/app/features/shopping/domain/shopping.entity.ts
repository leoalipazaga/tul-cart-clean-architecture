export interface ShoppingEntity {
    productId: string;
    cartId: string;
    quantity: number;
}

export interface ShoppingStore {
    shopping: ShoppingEntity[];
}

export type ShoppingStores = ShoppingEntity[];