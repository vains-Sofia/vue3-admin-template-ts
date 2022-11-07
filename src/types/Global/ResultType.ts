export interface ResultType<T> {
    code: number;
    message: string;
    success: boolean;
    data: T;
}
