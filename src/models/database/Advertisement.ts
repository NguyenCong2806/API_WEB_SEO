import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdvertisementDocument = Advertisement & Document;

@Schema()
export class Advertisement extends BaseEntity {
  @Prop()
  title: string;
  @Prop()
  image: string;
  @Prop()
  detail: string;
  @Prop()
  location: number;
  @Prop()
  site: string;
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);
