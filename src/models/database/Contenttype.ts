import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContenttypeDocument = Contenttype & Document;

@Schema()
export class Contenttype extends BaseEntity {
  @Prop()
  title: string;
  @Prop()
  detail: string;
  @Prop()
  oder: number;
  @Prop()
  link: string;
  @Prop()
  site: string;
}

export const ContenttypeSchema = SchemaFactory.createForClass(Contenttype);
