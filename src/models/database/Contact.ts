import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  detail: string;
  @Prop()
  link: string;
  @Prop()
  linkfacebook: string;
  @Prop()
  linkyoutobe: string;
  @Prop()
  linkin: string;
  @Prop()
  linktwitter: string;
  @Prop()
  site: string;
  @Prop()
  location: number;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
