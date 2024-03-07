import { Content } from './../../models/database/Content';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IContentRepository } from './IContentRepository';

@Injectable()
export class ContentRepository
  extends BaseRepository<Content>
  implements IContentRepository
{
  constructor(
    @InjectModel(Content.name)
    private readonly content_repository: Model<Content>,
  ) {
    super(content_repository);
  }
}
