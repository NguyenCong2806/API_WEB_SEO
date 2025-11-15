import { BaseEntity } from './BaseEntity';
import { Document } from 'mongoose';
export type CoursesDocument = Courses & Document;
export declare class Courses extends BaseEntity {
    icon: string;
    title: string;
    img: string;
    detail: string;
    oder: number;
    link: string;
    site: string;
    location: number;
}
export declare const CoursesSchema: import("mongoose").Schema<Courses, import("mongoose").Model<Courses, any, any, any, Document<unknown, any, Courses, any, {}> & Courses & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Courses, Document<unknown, {}, import("mongoose").FlatRecord<Courses>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Courses> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
