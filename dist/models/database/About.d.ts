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
export declare const AboutSchema: import("mongoose").Schema<About, import("mongoose").Model<About, any, any, any, Document<unknown, any, About, any, {}> & About & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, About, Document<unknown, {}, import("mongoose").FlatRecord<About>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<About> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
