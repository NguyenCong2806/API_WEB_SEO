import { Media } from './../../models/database/Media';
import { IBaseService } from '../IBaseService';

export interface IMediaService extends IBaseService<Media> {}
export const IMediaService = Symbol('IMediaService');
