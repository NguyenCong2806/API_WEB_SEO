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
import { BaseEntity } from './BaseEntity';
import { Document } from 'mongoose';
export type AboutDocument = About & Document;
export declare class About extends BaseEntity {
    icon: string;
    title: string;
    img: string;
    detail: string;
    textlist: Array<string>;
    link: string;
    site: string;
}
export declare const AboutSchema: import("mongoose").Schema<About, import("mongoose").Model<About, any, any, any, Document<unknown, any, About> & About & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, About, Document<unknown, {}, import("mongoose").FlatRecord<About>> & import("mongoose").FlatRecord<About> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
