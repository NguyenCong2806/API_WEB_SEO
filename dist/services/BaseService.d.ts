import ResultData from 'src/models/BaseModel/ResultData';
import { IBaseRepository } from './../repository/IBaseRepository';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import { BaseEntity } from './../models/database/BaseEntity';
import { IBaseService } from './IBaseService';
import { FilterQuery } from 'mongoose';
export declare abstract class BaseService<M extends BaseEntity> implements IBaseService<M> {
    private readonly repository;
    constructor(repository: IBaseRepository<M>);
    findconditions(condition?: FilterQuery<M>[]): Promise<ResultData>;
    findcondition(condition?: FilterQuery<M>): Promise<ResultData>;
    checkkeyword(condition?: FilterQuery<M>): Promise<ResultData>;
    countcondition(condition?: FilterQuery<M>): Promise<ResultData>;
    find(): Promise<ResultData>;
    create(item: M): Promise<ResultData>;
    update(id: string, item: Partial<M>): Promise<ResultData>;
    remove(id: string): Promise<ResultData>;
    finds(item: Paginations<M>): Promise<Results<M>>;
    findOne(id: string): Promise<ResultData>;
    findOneValue(condition?: FilterQuery<M>): Promise<ResultData>;
}
