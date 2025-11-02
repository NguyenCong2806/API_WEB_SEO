import { CardNumbers } from './../../models/database/CardNumbers';
import { IBaseService } from '../IBaseService';

export interface ICardNumbersService extends IBaseService<CardNumbers> {}
export const ICardNumbersService = Symbol('ICardNumbersService');