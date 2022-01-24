import { CartEntity } from "./cart.entity";

export function updateStatusBy(cart: CartEntity, updateBy: any) {
    return {...cart, ...updateBy(cart)};
}