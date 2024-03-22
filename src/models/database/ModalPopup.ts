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
}

export const ModalPopupSchema = SchemaFactory.createForClass(ModalPopup);
