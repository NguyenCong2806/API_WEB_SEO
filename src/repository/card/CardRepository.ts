import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Card } from 'src/models/database/Card';
import { ICardRepository } from './ICardRepository';

@Injectable()
export class CardRepository
  extends BaseRepository<Card>
  implements ICardRepository
{
  constructor(
    @InjectModel(Card.name)
    private readonly card_repository: Model<Card>,
  ) {
    super(card_repository);
  }
}
