import { FooterBox } from './../../models/database/FooterBox';

import { IBaseService } from '../IBaseService';

export interface IFooterBoxService extends IBaseService<FooterBox> {}
export const IFooterBoxService = Symbol('IFooterBoxService');
