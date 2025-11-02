import { PageContent } from 'src/models/database/PageContent';
import { IBaseService } from '../IBaseService';

export interface IPageContentservice extends IBaseService<PageContent> {}
export const IPageContentservice = Symbol('IPageContentservice');
