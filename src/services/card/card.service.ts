import { Card } from './../../models/database/Card';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ICardService } from './ICardService';
import { ICardRepository } from 'src/repository/card/ICardRepository';

@Injectable()
export class CardService extends BaseService<Card> implements ICardService {
  constructor(
    @Inject('ICardRepository')
    private readonly card_repository: ICardRepository,
  ) {
    super(card_repository);
  }
}
