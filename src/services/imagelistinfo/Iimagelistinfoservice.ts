import { ImageListInfo } from 'src/models/database/ImageListInfo';
import { IBaseService } from '../IBaseService';

export interface Iimagelistinfoservice extends IBaseService<ImageListInfo> {}
export const Iimagelistinfoservice = Symbol('Iimagelistinfoservice');
