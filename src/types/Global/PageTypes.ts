export interface PageTypes<T> {
    records?: Array<T>;
    total?: number;
    size: number;
    current: number;
    orders?: Array<OrderItem>;
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    countId?: CountId;
    maxLimit?: MaxLimit;
    pages?: number;
}

/*CountId*/
export interface CountId {}

/*MaxLimit*/
export interface MaxLimit {}

export interface OrderItem {
    column: string;
    asc: boolean;
}
