import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content extends BaseEntity {
  @Prop()
  title: string;
  @Prop()
  detail: string;
  @Prop()
  Oder: number;
  @Prop()
  link: string;
  @Prop()
  img: string;
  @Prop()
  note: string;
  @Prop()
  tophot: boolean;
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Contenttype' })
  contenttypes: Types.ObjectId;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
