import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  menuid: number;
  @Prop()
  menuchildid: number;
  @Prop()
  heading: string;
  @Prop()
  link: string;
  @Prop()
  fontsize: number;
  @Prop()
  fontweight: number;
  @Prop()
  site: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
