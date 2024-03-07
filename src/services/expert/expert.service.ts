import { Expert } from './../../models/database/Expert';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IExpertService } from './IExpertService';
import { IExpertRepository } from 'src/repository/expert/IExpertRepository';

@Injectable()
export class ExpertService
  extends BaseService<Expert>
  implements IExpertService
{
  constructor(
    @Inject('IExpertRepository')
    private readonly expert_repository: IExpertRepository,
  ) {
    super(expert_repository);
  }
}
