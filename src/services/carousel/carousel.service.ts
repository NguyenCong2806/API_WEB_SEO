import { ICarouselRepository } from './../../repository/carousel/ICarouselRepository';
import { Carousel } from './../../models/database/Carousel';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ICarouselService } from './ICarouselService';

@Injectable()
export class CarouselService
  extends BaseService<Carousel>
  implements ICarouselService
{
  constructor(
    @Inject('ICarouselRepository')
    private readonly carousel_repository: ICarouselRepository,
  ) {
    super(carousel_repository);
  }
}
