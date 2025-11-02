import { Card } from './../../models/database/Card';
import { IBaseService } from '../IBaseService';

export interface ICardService extends IBaseService<Card> {}
export const ICardService = Symbol('ICardService');