import { ModalPopup } from './../../models/database/ModalPopup';
import { IBaseService } from '../IBaseService';

export interface IModalPopupservice extends IBaseService<ModalPopup> {}
export const IModalPopupservice = Symbol('IModalPopupservice');