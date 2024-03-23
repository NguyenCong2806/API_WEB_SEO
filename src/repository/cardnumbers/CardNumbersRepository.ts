import { CardNumbers } from './../../models/database/CardNumbers';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { ICardNumbersRepository } from './ICardNumbersRepository';

@Injectable()
export class CardNumbersRepository
  extends BaseRepository<CardNumbers>
  implements ICardNumbersRepository
{
  constructor(
    @InjectModel(CardNumbers.name)
    private readonly cardnumbers_repository: Model<CardNumbers>,
  ) {
    super(cardnumbers_repository);
  }
}
