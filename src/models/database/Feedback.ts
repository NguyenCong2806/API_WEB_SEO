import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema()
export class Feedback extends BaseEntity {
  @Prop({ required: true })
  icon: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  detail: string;
  @Prop()
  job: string;
  @Prop()
  img: string;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
