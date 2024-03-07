import { About } from './../../models/database/About';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IAboutRepository } from './IAboutRepository';

@Injectable()
export class AboutRepository
  extends BaseRepository<About>
  implements IAboutRepository
{
  constructor(
    @InjectModel(About.name)
    private readonly about_repository: Model<About>,
  ) {
    super(about_repository);
  }
}
