import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IExpertRepository } from './IExpertRepository';
import { Expert } from 'src/models/database/Expert';

@Injectable()
export class ExpertRepository
  extends BaseRepository<Expert>
  implements IExpertRepository
{
  constructor(
    @InjectModel(Expert.name)
    private readonly expert_repository: Model<Expert>,
  ) {
    super(expert_repository);
  }
}
