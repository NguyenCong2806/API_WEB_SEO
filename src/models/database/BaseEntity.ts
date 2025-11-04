import { Prop } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export class BaseEntity {
  @Prop({ type: SchemaTypes.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ default: Date.now })
  createddate: Date;
}
