import { CardNumbers } from './../../models/database/CardNumbers';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ICardNumbersRepository } from 'src/repository/cardnumbers/ICardNumbersRepository';
import { ICardNumbersService } from './ICardNumbersService';

@Injectable()
export class CardNumbersService extends BaseService<CardNumbers> implements ICardNumbersService {
  constructor(
    @Inject('ICardNumbersRepository')
    private readonly cardnumbers_repository: ICardNumbersRepository,
  ) {
    super(cardnumbers_repository);
  }
}
