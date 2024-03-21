import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MajorsNoteDocument = MajorsNote & Document;

@Schema()
export class MajorsNote extends BaseEntity {
  @Prop()
  heading: string;
  @Prop()
  note: string;
  @Prop()
  fontsize: number;
  @Prop()
  fontweight: number;
}

export const MajorsNoteSchema = SchemaFactory.createForClass(MajorsNote);
