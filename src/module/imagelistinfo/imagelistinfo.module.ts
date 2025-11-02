import { ImagelistinfoRepository } from './../../repository/imagelistinfo/ImagelistinfoRepository';
import { ImagelistinfoController } from './../../controllers/imagelistinfo/imagelistinfo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ImageListInfoService } from 'src/services/imagelistinfo/imagelistinfo.service';
import { ImageListInfoSchema } from 'src/models/database/ImageListInfo';
import { Iimagelistinfoservice } from 'src/services/imagelistinfo/Iimagelistinfoservice';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ImageListInfo', schema: ImageListInfoSchema },
    ]),

  ],
  controllers: [ImagelistinfoController],
  providers: [
    {
      provide: Iimagelistinfoservice, // <-- Token (Giá trị)
      useClass: ImageListInfoService,  // <-- Class (Thực thi)
    },
    { provide: 'IImagelistinfoRepository', useClass: ImagelistinfoRepository },
  ],
  exports: [Iimagelistinfoservice],
})
export class ImagelistinfoModule {}
