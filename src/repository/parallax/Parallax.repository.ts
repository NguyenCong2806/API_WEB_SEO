import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Parallax } from 'src/models/database/Parallax';
import { IParallaxRepository } from './IParallax.repository';

@Injectable()
export class ParallaxRepository
  extends BaseRepository<Parallax>
  implements IParallaxRepository
{
  constructor(
    @InjectModel(Parallax.name)
    private readonly parallax_repository: Model<Parallax>,
  ) {
    super(parallax_repository);
  }
}
