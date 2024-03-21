import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardNumbersDocument = CardNumbers & Document;

@Schema()
export class CardNumbers extends BaseEntity {
  @Prop({ required: true })
  icon: string;
  @Prop()
  start: number;
  @Prop()
  end: number;
  @Prop()
  suffix: string;
  @Prop()
  prefix: string;
  @Prop()
  fontsize: number;
  @Prop()
  fontweight: number;
}

export const CardNumbersSchema = SchemaFactory.createForClass(CardNumbers);
