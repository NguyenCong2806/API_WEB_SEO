import { Popular } from './../../models/database/Popular';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IPopularRepository } from './IPopularRepository';
@Injectable()
export class PopularRepository
  extends BaseRepository<Popular>
  implements IPopularRepository
{
  constructor(
    @InjectModel(Popular.name)
    private readonly popular_repository: Model<Popular>,
  ) {
    super(popular_repository);
  }
}
