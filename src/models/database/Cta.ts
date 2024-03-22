import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CtaDocument = Cta & Document;

@Schema()
export class Cta extends BaseEntity {
  @Prop()
  link: string;
  @Prop()
  text: string;
  @Prop()
  isshow: boolean;
}

export const CtaSchema = SchemaFactory.createForClass(Cta);
