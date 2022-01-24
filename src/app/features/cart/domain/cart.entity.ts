export interface CartEntity {
    id: string;
    status: CartStatus;
}

enum CartStatus {
    pending = 'pending',
    completed = 'completed'
}