import { ImagelistinfoRepository } from './../../repository/imagelistinfo/ImagelistinfoRepository';
import { ImagelistinfoController } from './../../controllers/imagelistinfo/imagelistinfo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ImageListInfoService } from 'src/services/imagelistinfo/imagelistinfo.service';
import { ImageListInfoSchema } from 'src/models/database/ImageListInfo';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ImageListInfo', schema: ImageListInfoSchema },
    ]),
  ],
  controllers: [ImagelistinfoController],
  providers: [
    ImageListInfoService,
    { provide: 'IImagelistinfoRepository', useClass: ImagelistinfoRepository },
  ],
  exports: [ImageListInfoService],
})
export class ImagelistinfoModule {}
