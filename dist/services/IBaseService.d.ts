import ResultData from 'src/models/BaseModel/ResultData';
import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
export interface Write<M> {
    create(item: M | any): Promise<ResultData>;
    update(id: string, item: Partial<M>): Promise<ResultData>;
    remove(id: string): Promise<ResultData>;
}
export interface Read<M> {
    finds(item: Paginations<M>): Promise<Results<M>>;
    find(): Promise<ResultData>;
    findconditions(condition?: Array<FilterQuery<M>>): Promise<ResultData>;
    findcondition(condition?: FilterQuery<M>): Promise<ResultData>;
    findOne(id: string): Promise<ResultData>;
    findOneValue(condition?: FilterQuery<M>): Promise<ResultData>;
    checkkeyword(condition?: FilterQuery<M>): Promise<ResultData>;
    countcondition(condition?: FilterQuery<M>): Promise<ResultData>;
}
export interface IBaseService<M> extends Write<M>, Read<M> {
}
