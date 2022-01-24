import { ShoppingStores } from "./shopping.entity";

export function updateShoppingBy(store: ShoppingStores, updateBy: any) {
    return store.map(updateBy);
}