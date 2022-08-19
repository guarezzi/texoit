import { IPageable } from "./pageable.model";
import { ISort } from "./sort.model";

export interface IPage<T> {
    content: T[];
    pageable: IPageable;
    totalElements: number;
    last: boolean;
    totalPages: number;
    first: boolean;
    sort: ISort;
    number: number;
    numberOfElements: number;
    size: number;
    update(page: IPage<T>): void;
}

export class Page<T> implements IPage<T> {
    content: T[];
    pageable: IPageable;
    totalElements: number;
    last: boolean;
    totalPages: number;
    first: boolean;
    sort: ISort;
    number: number;
    numberOfElements: number;
    size: number;

    constructor(
        content?: T[],
        pageable?: IPageable,
        totalElements?: number,
        last?: boolean,
        totalPages?: number,
        first?: boolean,
        sort?: ISort,
        number = 1,
        numberOfElements?: number,
        size?: number
    ) {
        this.content = content;
        this.pageable = pageable;
        this.totalElements = totalElements;
        this.last = last;
        this.totalPages = totalPages;
        this.first = first;
        this.sort = sort;
        this.number = number;
        this.numberOfElements = numberOfElements;
        this.size = size;
    }

    update(page: IPage<T>) {
        this.content = page.content;
        this.pageable = page.pageable;
        this.totalElements = page.totalElements;
        this.last = page.last;
        this.totalPages = page.totalPages;
        this.first = page.first;
        this.sort = page.sort;
        this.numberOfElements = page.numberOfElements;
        this.size = page.size;
    }
}