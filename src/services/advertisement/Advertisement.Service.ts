import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Advertisement } from 'src/models/database/Advertisement';
import { IAdvertisementService } from './IAdvertisement.Service';
import { IAdvertisementRespository } from 'src/repository/advertisement/IAdvertisementRepository';
@Injectable()
export class AdvertisementService
  extends BaseService<Advertisement>
  implements IAdvertisementService
{
  constructor(
    @Inject('IAdvertisementRepository')
    private readonly advertisement_repository: IAdvertisementRespository,
  ) {
    super(advertisement_repository);
  }
}
