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
export type CarouselDocument = Carousel & Document;
export declare class Carousel extends BaseEntity {
    heading: string;
    title: string;
    img: string;
    detail: string;
    link: string;
    site: string;
    location: number;
}
export declare const CarouselSchema: import("mongoose").Schema<Carousel, import("mongoose").Model<Carousel, any, any, any, Document<unknown, any, Carousel> & Carousel & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Carousel, Document<unknown, {}, import("mongoose").FlatRecord<Carousel>> & import("mongoose").FlatRecord<Carousel> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
