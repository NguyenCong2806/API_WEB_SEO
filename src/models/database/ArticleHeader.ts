import { BaseEntity } from './BaseEntity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleHeaderDocument = ArticleHeader & Document;

@Schema()
export class ArticleHeader extends BaseEntity {
  @Prop()
  headingheader: string;
  @Prop()
  headingbody: string;
  @Prop()
  headingfooter: string;
  @Prop()
  location: number;
  @Prop()
  fontsize: number;
  @Prop()
  fontweight: number;
  @Prop()
  isdivider: boolean;
  @Prop()
  site: string;
}

export const ArticleHeaderSchema = SchemaFactory.createForClass(ArticleHeader);
