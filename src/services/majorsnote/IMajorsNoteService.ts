import { MajorsNote } from './../../models/database/MajorsNote';
import { IBaseService } from '../IBaseService';

export interface IMajorsNoteService extends IBaseService<MajorsNote> {}
export const IMajorsNoteService = Symbol('IMajorsNoteService');
