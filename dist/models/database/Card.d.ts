import { BaseEntity } from './BaseEntity';
import { Document } from 'mongoose';
export type CardDocument = Card & Document;
export declare class Card extends BaseEntity {
    icon: string;
    title: string;
    detail: string;
    link: string;
    fontsize: number;
    fontweight: number;
    site: string;
    location: number;
}
export declare const CardSchema: import("mongoose").Schema<Card, import("mongoose").Model<Card, any, any, any, Document<unknown, any, Card, any, {}> & Card & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Card, Document<unknown, {}, import("mongoose").FlatRecord<Card>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Card> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
