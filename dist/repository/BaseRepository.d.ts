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
import { IBaseRepository } from './IBaseRepository';
import { BaseEntity } from './../models/database/BaseEntity';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import { FilterQuery, Model } from 'mongoose';
export declare abstract class BaseRepository<T extends BaseEntity> implements IBaseRepository<T> {
    private readonly _model;
    protected constructor(_model: Model<T>);
    deletefile(condition?: FilterQuery<T>): Promise<ResultData>;
    findconditions(conditions?: FilterQuery<T>[]): Promise<ResultData>;
    findcondition(condition?: FilterQuery<T>): Promise<ResultData>;
    checkkeyword(condition?: FilterQuery<T>): Promise<ResultData>;
    countcondition(condition?: FilterQuery<T>): Promise<ResultData>;
    finds(item: Paginations<T>): Promise<Results<T>>;
    find(): Promise<ResultData>;
    findOne(id: any): Promise<ResultData>;
    findOneValue(condition?: FilterQuery<T>): Promise<ResultData>;
    create(item: T): Promise<ResultData>;
    count(): Promise<ResultData>;
    update(id: any, item: T): Promise<ResultData>;
    delete(id: any): Promise<ResultData>;
}
