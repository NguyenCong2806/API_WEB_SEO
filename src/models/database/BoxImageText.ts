import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoxImageTextDocument = BoxImageText & Document;

@Schema()
export class BoxImageText extends BaseEntity {
  @Prop()
  image: string;
  @Prop()
  heading: string;
  @Prop()
  note: string;
  @Prop()
  location: number;
}

export const BoxImageTextSchema = SchemaFactory.createForClass(BoxImageText);
