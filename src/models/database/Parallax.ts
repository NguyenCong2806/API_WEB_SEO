import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParallaxDocument = Parallax & Document;

@Schema()
export class Parallax extends BaseEntity {
  @Prop()
  bgimage: string;
  @Prop()
  bgimagealt: string;
  @Prop()
  strength: number;
  @Prop()
  blurmin: number;
  @Prop()
  blurmax: number;
  @Prop()
  location: number;
  @Prop()
  site: string;
}

export const ParallaxSchema = SchemaFactory.createForClass(Parallax);
