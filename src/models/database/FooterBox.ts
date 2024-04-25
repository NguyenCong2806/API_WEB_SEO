import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FooterBoxDocument = FooterBox & Document;

@Schema()
export class FooterBox extends BaseEntity {
  @Prop()
  detail: string;
  @Prop()
  oder: number;
  @Prop()
  site: string;
  @Prop()
  location: number;
}

export const FooterBoxSchema = SchemaFactory.createForClass(FooterBox);
