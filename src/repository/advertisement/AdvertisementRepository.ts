import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Advertisement } from 'src/models/database/Advertisement';
import { IAdvertisementRespository } from './IAdvertisementRepository';

@Injectable()
export class AdvertisementRepository
  extends BaseRepository<Advertisement>
  implements IAdvertisementRespository
{
  constructor(
    @InjectModel(Advertisement.name)
    private readonly advertisement_repository: Model<Advertisement>,
  ) {
    super(advertisement_repository);
  }
}
