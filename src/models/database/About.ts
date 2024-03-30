import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

@Schema()
export class About extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  img: string;
  @Prop()
  detail: string;
  @Prop()
  textlist: Array<string>;
  @Prop()
  link: string;
  @Prop()
  site: string;
}

export const AboutSchema = SchemaFactory.createForClass(About);
