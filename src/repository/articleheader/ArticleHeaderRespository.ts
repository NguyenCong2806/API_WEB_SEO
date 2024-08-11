/* eslint-disable prettier/prettier */
import { ArticleHeader } from './../../models/database/ArticleHeader';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IArticleHeaderRespository } from './IArticleHeaderRespository';

@Injectable()
export class ArticleHeaderRespository
  extends BaseRepository<ArticleHeader>
  implements IArticleHeaderRespository
{
  constructor(
    @InjectModel(ArticleHeader.name)
    private readonly card_repository: Model<ArticleHeader>,
  ) {
    super(card_repository);
  }
}