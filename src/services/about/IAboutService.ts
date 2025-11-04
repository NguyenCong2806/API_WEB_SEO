import { About } from './../../models/database/About';

import { IBaseService } from '../IBaseService';

export interface IAboutService extends IBaseService<About> {}
export const IAboutService = Symbol('IAboutService');