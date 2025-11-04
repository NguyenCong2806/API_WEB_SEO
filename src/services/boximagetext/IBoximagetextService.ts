import { BoxImageText } from './../../models/database/BoxImageText';
import { IBaseService } from '../IBaseService';

export interface IBoximagetextService extends IBaseService<BoxImageText> {}
export const IBoximagetextService = Symbol('IBoximagetextService');