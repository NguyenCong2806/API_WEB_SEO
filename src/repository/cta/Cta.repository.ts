import { Cta } from './../../models/database/Cta';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { ICtaRepository } from './ICtaRepository';

@Injectable()
export class CtaRepository
  extends BaseRepository<Cta>
  implements ICtaRepository
{
  constructor(
    @InjectModel(Cta.name)
    private readonly cta_repository: Model<Cta>,
  ) {
    super(cta_repository);
  }
}
