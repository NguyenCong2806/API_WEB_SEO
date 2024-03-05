import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card extends BaseEntity {
  @Prop({ required: true })
  icon: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  detail: string;
  @Prop({ required: true })
  link: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
