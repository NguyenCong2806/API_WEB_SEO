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
import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
export interface Write<M> {
    create(item: M | any): Promise<ResultData>;
    update(item: Partial<M>): Promise<ResultData>;
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
