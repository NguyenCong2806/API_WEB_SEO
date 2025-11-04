import { BoxImageTextController } from './../../controllers/boximagetext/boximagetext.controller';
import { BoximagetextRespository } from './../../repository/boximagetext/BoximagetextRepository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoximagetextService } from 'src/services/boximagetext/boximagetext.service';
import { BoxImageTextSchema } from 'src/models/database/BoxImageText';
import { IBoximagetextService } from 'src/services/boximagetext/IBoximagetextService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BoxImageText', schema: BoxImageTextSchema },
    ]),
  ],
  controllers: [BoxImageTextController],
  providers: [
    {
      provide: IBoximagetextService,
      useClass: BoximagetextService,
    },    
    {
      provide: 'IBoximagetextRepository',
      useClass: BoximagetextRespository,
    },
  ],
  exports: [IBoximagetextService],
})
export class BoxImageTextModule {}
