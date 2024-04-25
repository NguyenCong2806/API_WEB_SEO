import { Advertisement } from 'src/models/database/Advertisement';
import { IBaseRepository } from './../IBaseRepository';

export interface IAdvertisementRespository
  extends IBaseRepository<Advertisement> {}
