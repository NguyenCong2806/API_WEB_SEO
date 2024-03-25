import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccordionDocument = Accordion & Document;

@Schema()
export class Accordion extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  detail: string;
  @Prop()
  defaultindex: number;
}

export const AccordionSchema = SchemaFactory.createForClass(Accordion);
