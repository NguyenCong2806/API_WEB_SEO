import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogoDocument = Logo & Document;

@Schema()
export class Logo extends BaseEntity {
  @Prop()
  image: string;
  @Prop()
  height: number;
  @Prop()
  width: number;
  @Prop()
  link: string;
}

export const LogoSchema = SchemaFactory.createForClass(Logo);
