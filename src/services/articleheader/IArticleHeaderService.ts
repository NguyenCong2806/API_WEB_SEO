import { ArticleHeader } from './../../models/database/ArticleHeader';
import { IBaseService } from '../IBaseService';

export interface IArticleHeaderService extends IBaseService<ArticleHeader> {}
export const IArticleHeaderService = Symbol('IArticleHeaderService');