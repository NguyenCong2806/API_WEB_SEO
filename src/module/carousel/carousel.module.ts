import { CarouselService } from './../../services/carousel/carousel.service';
import { CarouselSchema } from './../../models/database/Carousel';
import { CarouselRepository } from './../../repository/carousel/CarouselRepository';
import { CarouselController } from './../../controllers/carousel/carousel.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ICarouselService } from 'src/services/carousel/ICarouselService';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carousel', schema: CarouselSchema }]),
  ],
  controllers: [CarouselController],
  providers: [
    {
      provide: ICarouselService, // <-- Token (Giá trị)
      useClass: CarouselService,  // <-- Class (Thực thi)
    },
    { provide: 'ICarouselRepository', useClass: CarouselRepository },
  ],
  exports: [ICarouselService],
})
export class CarouselModule {}
