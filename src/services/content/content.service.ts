import { IContentRepository } from './../../repository/Content/IContentRepository';
import { Content } from './../../models/database/Content';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IContentService } from './IContentService';

@Injectable()
export class ContentService
  extends BaseService<Content>
  implements IContentService
{
  constructor(
    @Inject('IContentRepository')
    private readonly content_repository: IContentRepository,
  ) {
    super(content_repository);
  }
}
