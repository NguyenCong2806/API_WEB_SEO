import { Contenttype } from './../../models/database/Contenttype';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IContenttypeRepository } from './IContenttypeRepository';

@Injectable()
export class ContenttypeRepository
  extends BaseRepository<Contenttype>
  implements IContenttypeRepository
{
  constructor(
    @InjectModel(Contenttype.name)
    private readonly contenttype_repository: Model<Contenttype>,
  ) {
    super(contenttype_repository);
  }
}
