import { IPopularRepository } from './../../repository/popular/IPopularRepository';
import { Popular } from './../../models/database/Popular';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IPopularService } from './IPopularService';

@Injectable()
export class PopularService
  extends BaseService<Popular>
  implements IPopularService
{
  constructor(
    @Inject('IPopularRepository')
    private readonly popular_repository: IPopularRepository,
  ) {
    super(popular_repository);
  }
}
