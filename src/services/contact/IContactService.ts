import { Contact } from './../../models/database/Contact';
import { IBaseService } from '../IBaseService';

export interface IContactService extends IBaseService<Contact> {}
export const IContactService = Symbol('IContactService');
