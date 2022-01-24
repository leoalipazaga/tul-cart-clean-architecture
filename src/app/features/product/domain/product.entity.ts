export interface ProductEntity {
    id: number;
    description: string;
    price: string;
    name: string;
    sku: string;
    quantity?: number;
    total?: number;
}
