import { IPopularService } from 'src/services/popular/IPopularService';
import { PopularController } from './../../controllers/popular/popular.controller';
import { PopularSchema } from './../../models/database/Popular';
import { PopularRepository } from './../../repository/Popular/PopularRepository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PopularService } from 'src/services/popular/popular.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Popular', schema: PopularSchema }]),
  ],
  controllers: [PopularController],
  providers: [
    {
      provide: IPopularService, // <-- Token (Giá trị)
      useClass: PopularService, // <-- Class (Thực thi)
    },
    { provide: 'IPopularRepository', useClass: PopularRepository },
  ],
  exports: [IPopularService],
})
export class PopularModule {}
