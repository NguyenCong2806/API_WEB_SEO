import { Contenttype } from './../../models/database/Contenttype';
import { IBaseService } from '../IBaseService';

export interface IContenttypeService extends IBaseService<Contenttype> {}
export const IContenttypeService = Symbol('IContenttypeService');