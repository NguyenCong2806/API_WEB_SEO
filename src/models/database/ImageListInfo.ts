import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageListInfoDocument = ImageListInfo & Document;

@Schema()
export class ImageListInfo extends BaseEntity {
  @Prop()
  img: string;
  @Prop()
  link: string;
  @Prop()
  text: string;
  @Prop()
  isshow: boolean;
  @Prop()
  location: number;
  @Prop()
  site: string;
}

export const ImageListInfoSchema = SchemaFactory.createForClass(ImageListInfo);
