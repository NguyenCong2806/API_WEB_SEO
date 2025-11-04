import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaDocument = Media & Document;

@Schema()
export class Media extends BaseEntity {
  @Prop()
  path: string;
  @Prop()
  size: number;
  @Prop()
  destination: string;
  @Prop()
  encoding: string;
  @Prop()
  fieldname: string;
  @Prop()
  filename: string;
  @Prop()
  mimetype: string;
  @Prop()
  originalname: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
