import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MajorsNoteDocument = MajorsNote & Document;

@Schema()
export class MajorsNote extends BaseEntity {
  @Prop()
  image: string;
  @Prop()
  heading: string;
  @Prop()
  note: string;
  @Prop()
  location: number;
}

export const MajorsNoteSchema = SchemaFactory.createForClass(MajorsNote);
