import { PopularController } from './../../controllers/popular/popular.controller';
import { PopularSchema } from './../../models/database/Popular';
import { PopularRepository } from './../../repository/Popular/PopularRepository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PopularService } from 'src/services/popular/popular.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Popular', schema: PopularSchema }]),
    JwtModule,
  ],
  controllers: [PopularController],
  providers: [
    PopularService,
    { provide: 'IPopularRepository', useClass: PopularRepository },
  ],
  exports: [PopularService],
})
export class PopularModule {}
