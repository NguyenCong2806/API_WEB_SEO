import { FilterQuery } from 'mongoose';

export default class Paginations<T> {
  perPage: number = 1;
  page: number = 10;
  keyword?: string = null;
  condition?: FilterQuery<T>;
}
