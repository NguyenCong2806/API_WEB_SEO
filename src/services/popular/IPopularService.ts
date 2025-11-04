import { Popular } from './../../models/database/Popular';
import { IBaseService } from '../IBaseService';

export interface IPopularService extends IBaseService<Popular> {}
export const IPopularService = Symbol('IPopularService');
