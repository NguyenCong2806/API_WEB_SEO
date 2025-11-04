import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content extends BaseEntity {
  @Prop()
  title: string;
  @Prop()
  author: string;
  @Prop()
  detail: string;
  @Prop()
  oder: number;
  @Prop()
  link: string;
  @Prop()
  img: string;
  @Prop()
  note: string;
  @Prop()
  tophot: boolean;
  @Prop()
  site: string;
  @Prop()
  location: number;
  @Prop()
  contenttypesId: string;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
