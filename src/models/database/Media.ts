import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaDocument = Media & Document;

@Schema()
export class Media extends BaseEntity {
  @Prop()
  path: string;
  @Prop()
  size: number;
  @Prop()
  formatfile: string;
  @Prop()
  namefile: string;
  @Prop()
  site: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
