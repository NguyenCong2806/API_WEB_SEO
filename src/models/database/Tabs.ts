import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TabsDocument = Tabs & Document;

@Schema()
export class Tabs extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  label: string;
  @Prop()
  content: string;
  @Prop()
  site: string;
}

export const TabsSchema = SchemaFactory.createForClass(Tabs);
