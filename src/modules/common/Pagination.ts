export interface PageModel {
    page: number;
    perPage: number;
}

export interface PageResult<T> {
    data: T[];
    page: number;
    perPage: number;
}