import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { PageContent } from 'src/models/database/PageContent';
import { IPageContentRepository } from './IPageContent.repository';

@Injectable()
export class PageContentRepository
  extends BaseRepository<PageContent>
  implements IPageContentRepository
{
  constructor(
    @InjectModel(PageContent.name)
    private readonly pagecontent_repository: Model<PageContent>,
  ) {
    super(pagecontent_repository);
  }
}
