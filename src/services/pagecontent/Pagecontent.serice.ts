import { PageContent } from './../../models/database/PageContent';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IPageContentRepository } from 'src/repository/pagecontent/IPageContent.repository';
import { IPageContentservice } from './IPagecontent.serice';

@Injectable()
export class PageContentService
  extends BaseService<PageContent>
  implements IPageContentservice
{
  constructor(
    @Inject('IPageContentRepository')
    private readonly pagecontent_repository: IPageContentRepository,
  ) {
    super(pagecontent_repository);
  }
}
