import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpertDocument = Expert & Document;

@Schema()
export class Expert extends BaseEntity {
  @Prop()
  img: string;
  @Prop()
  title: string;
  @Prop()
  detail: string;
  @Prop()
  link: string;
  @Prop()
  icon: string;
  @Prop()
  location: number;
  @Prop()
  site: string;
}

export const ExpertSchema = SchemaFactory.createForClass(Expert);
