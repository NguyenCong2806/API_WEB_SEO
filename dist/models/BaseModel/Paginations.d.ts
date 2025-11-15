import { FilterQuery } from 'mongoose';
export default class Paginations<T> {
    pageindex: number;
    pagesize: number;
    keyword?: string;
    condition?: FilterQuery<T>;
}
