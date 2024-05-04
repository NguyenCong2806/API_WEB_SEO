import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertisementController } from 'src/controllers/advertisement/advertisement.controller';
import { AdvertisementSchema } from 'src/models/database/Advertisement';
import { AdvertisementRepository } from 'src/repository/advertisement/AdvertisementRepository';
import { AdvertisementService } from 'src/services/advertisement/Advertisement.Service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Advertisement', schema: AdvertisementSchema },
    ]),
    JwtModule,
  ],
  controllers: [AdvertisementController],
  providers: [
    AdvertisementService,
    {
      provide: 'IAdvertisementRepository',
      useClass: AdvertisementRepository,
    },
  ],
  exports: [AdvertisementService],
})
export class AdvertisementModule {}
