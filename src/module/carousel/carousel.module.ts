import { CarouselService } from './../../services/carousel/carousel.service';
import { CarouselSchema } from './../../models/database/Carousel';
import { CarouselRepository } from './../../repository/carousel/CarouselRepository';
import { CarouselController } from './../../controllers/carousel/carousel.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carousel', schema: CarouselSchema }]),
  ],
  controllers: [CarouselController],
  providers: [
    CarouselService,
    { provide: 'ICarouselRepository', useClass: CarouselRepository },
  ],
  exports: [CarouselService],
})
export class CarouselModule {}
