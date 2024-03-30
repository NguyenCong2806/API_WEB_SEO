import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarouselDocument = Carousel & Document;

@Schema()
export class Carousel extends BaseEntity {
  @Prop({ required: true })
  heading: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  img: string;
  @Prop({ required: true })
  detail: string;
  @Prop({ required: true })
  link: string;
  @Prop()
  site: string;
}

export const CarouselSchema = SchemaFactory.createForClass(Carousel);
