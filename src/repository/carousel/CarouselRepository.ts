import { Carousel } from './../../models/database/Carousel';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { ICarouselRepository } from './ICarouselRepository';

@Injectable()
export class CarouselRepository
  extends BaseRepository<Carousel>
  implements ICarouselRepository
{
  constructor(
    @InjectModel(Carousel.name)
    private readonly carousel_repository: Model<Carousel>,
  ) {
    super(carousel_repository);
  }
}
