import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/BaseModel/Paginations';
import ResultData from 'src/models/BaseModel/ResultData';
import Results from 'src/models/BaseModel/Results';

export interface IBaseRepository<T> {
  // Read
  finds(item: Paginations<T>): Promise<Results<T>>;
  find(): Promise<ResultData>;
  findcondition(condition?: FilterQuery<T>): Promise<ResultData>;
  findOne(id: string): Promise<ResultData>; // Đổi any -> string
  findOneValue(condition?: FilterQuery<T>): Promise<ResultData>;
  findconditions(condition?: FilterQuery<T>[]): Promise<ResultData>;
  checkkeyword(condition?: FilterQuery<T>): Promise<ResultData>;
  count(): Promise<ResultData>;
  countcondition(condition?: FilterQuery<T>): Promise<ResultData>;

  // Write
  create(item: T): Promise<ResultData>;
  update(id: string, item: Partial<T>): Promise<ResultData>; // Đổi any -> string
  delete(id: string): Promise<ResultData>; // Đổi any -> string
}