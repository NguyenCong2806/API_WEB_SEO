import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/BaseModel/Paginations';
import ResultData from 'src/models/BaseModel/ResultData';
import Results from 'src/models/BaseModel/Results';

export interface IBaseRepository<T> {
  finds(item: Paginations<T>): Promise<Results<T>>;
  find(): Promise<ResultData>;
  findcondition(condition?: FilterQuery<T>): Promise<ResultData>;
  findOne(id: any): Promise<ResultData>;
  findOneValue(condition?: FilterQuery<T>): Promise<ResultData>;

  create(item: T): Promise<ResultData>;
  checkkeyword(condition?: FilterQuery<T>): Promise<ResultData>;
  count(): Promise<ResultData>;
  countcondition(condition?: FilterQuery<T>): Promise<ResultData>;
  update(id: any, item: Partial<T>): Promise<ResultData>;
  delete(id: any): Promise<ResultData>;
}
