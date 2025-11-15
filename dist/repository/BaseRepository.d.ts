import ResultData from 'src/models/BaseModel/ResultData';
import { IBaseRepository } from './IBaseRepository';
import { BaseEntity } from './../models/database/BaseEntity';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import { FilterQuery, Model } from 'mongoose';
export declare abstract class BaseRepository<T extends BaseEntity> implements IBaseRepository<T> {
    private readonly _model;
    protected constructor(_model: Model<T>);
    findconditions(conditions?: FilterQuery<T>[]): Promise<ResultData>;
    findcondition(condition?: FilterQuery<T>): Promise<ResultData>;
    checkkeyword(condition?: FilterQuery<T>): Promise<ResultData>;
    countcondition(condition?: FilterQuery<T>): Promise<ResultData>;
    finds(item: Paginations<T>): Promise<Results<T>>;
    find(): Promise<ResultData>;
    findOne(id: string): Promise<ResultData>;
    findOneValue(condition?: FilterQuery<T>): Promise<ResultData>;
    create(item: T): Promise<ResultData>;
    count(): Promise<ResultData>;
    update(id: string, item: Partial<T>): Promise<ResultData>;
    delete(id: string): Promise<ResultData>;
}
