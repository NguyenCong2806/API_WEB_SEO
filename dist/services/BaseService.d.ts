/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
