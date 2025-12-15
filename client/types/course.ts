export interface Course {
    _id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    next_batch_starting: string;
    currency: string;
    original_price: number;
    discounted_price: number;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}


// Generic API Response Type
export interface ApiResponse<T> {
    status: string;
    message?: string;
    data: T;
}
