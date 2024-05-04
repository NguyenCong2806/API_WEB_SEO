import { BoxImageTextController } from './../../controllers/boximagetext/boximagetext.controller';
import { BoximagetextRespository } from './../../repository/boximagetext/BoximagetextRepository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoximagetextService } from 'src/services/boximagetext/boximagetext.service';
import { BoxImageTextSchema } from 'src/models/database/BoxImageText';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BoxImageText', schema: BoxImageTextSchema },
    ]),
    JwtModule,
  ],
  controllers: [BoxImageTextController],
  providers: [
    BoximagetextService,
    {
      provide: 'IBoximagetextRepository',
      useClass: BoximagetextRespository,
    },
  ],
  exports: [BoximagetextService],
})
export class BoxImageTextModule {}
