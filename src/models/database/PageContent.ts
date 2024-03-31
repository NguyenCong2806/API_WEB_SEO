import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PageContentDocument = PageContent & Document;

@Schema()
export class PageContent extends BaseEntity {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  heading: string;
  @Prop()
  menuid: number;
  @Prop()
  link: string;
  @Prop()
  location: number;
  @Prop()
  site: string;
}

export const PageContentSchema = SchemaFactory.createForClass(PageContent);
