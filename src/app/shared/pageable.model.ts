import { ISort } from "./sort.model";

export interface IPageable {
    sort: ISort;
    pageSize: Number;
    pageNumber: Number;
    offset: Number;
    paged: Boolean;
    unpaged: Boolean;
}