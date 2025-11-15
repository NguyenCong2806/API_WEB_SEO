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
export declare const CarouselSchema: import("mongoose").Schema<Carousel, import("mongoose").Model<Carousel, any, any, any, Document<unknown, any, Carousel, any, {}> & Carousel & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Carousel, Document<unknown, {}, import("mongoose").FlatRecord<Carousel>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Carousel> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
