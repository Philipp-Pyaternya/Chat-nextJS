export interface IPagerParams {
    pageName?: string;
    sort?: object;
    filter?: object;
    page?: number;
    perPage: number;
    force?: boolean;
    count?: number;
    entityName?: string;
}
