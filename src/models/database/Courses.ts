import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoursesDocument = Courses & Document;

@Schema()
export class Courses extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  img: string;
  @Prop()
  detail: string;
  @Prop()
  Oder: number;
  @Prop()
  link: string;
}

export const CoursesSchema = SchemaFactory.createForClass(Courses);
