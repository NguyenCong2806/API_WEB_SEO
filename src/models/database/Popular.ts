import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PopularDocument = Popular & Document;

@Schema()
export class Popular extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  img: string;
  @Prop()
  detail: string;
  @Prop()
  Price: number;
  @Prop()
  link: string;
  @Prop()
  author: string;
  @Prop()
  time: number;
  @Prop()
  quantity: string;
  @Prop()
  site: string;
}

export const PopularSchema = SchemaFactory.createForClass(Popular);
