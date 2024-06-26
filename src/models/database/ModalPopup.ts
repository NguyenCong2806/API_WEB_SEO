import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModalPopupDocument = ModalPopup & Document;

@Schema()
export class ModalPopup extends BaseEntity {
  @Prop()
  image: string;
  @Prop()
  isshow: boolean;
  @Prop()
  link: string;
  @Prop()
  note: string;
  @Prop()
  titel: string;
  @Prop()
  timestart: number;
  @Prop()
  timeend: number;
  @Prop()
  position: number;
  @Prop()
  scrollstart: number;
  @Prop()
  scrollend: number;
  @Prop()
  location: number;
  @Prop()
  site: string;
}

export const ModalPopupSchema = SchemaFactory.createForClass(ModalPopup);
