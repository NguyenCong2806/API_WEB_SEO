import { ArticleHeader } from './../../models/database/ArticleHeader';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IArticleHeaderService } from './IArticleHeaderService';
import { IArticleHeaderRespository } from 'src/repository/articleheader/IArticleHeaderRespository';

@Injectable()
export class ArticleHeaderService
  extends BaseService<ArticleHeader>
  implements IArticleHeaderService
{
  constructor(
    @Inject('IArticleHeaderRespository')
    private readonly articleheader_repository: IArticleHeaderRespository,
  ) {
    super(articleheader_repository);
  }
}
