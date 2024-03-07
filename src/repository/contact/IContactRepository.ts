import { Contact } from './../../models/database/Contact';
import { IBaseRepository } from './../IBaseRepository';

export interface IContactRepository extends IBaseRepository<Contact> {}
