import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertisementController } from 'src/controllers/advertisement/advertisement.controller';
import { AdvertisementSchema } from 'src/models/database/Advertisement';
import { AdvertisementRepository } from 'src/repository/advertisement/AdvertisementRepository';
import { AdvertisementService } from 'src/services/advertisement/Advertisement.Service';
import { IAdvertisementService } from 'src/services/advertisement/IAdvertisement.Service'; // <-- 2. IMPORT TOKEN

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Advertisement', schema: AdvertisementSchema },
    ]),
  ],
  controllers: [AdvertisementController],
  providers: [
    // 3. SỬA LẠI PROVIDER ĐỂ DÙNG TOKEN
    {
      provide: IAdvertisementService, 
      useClass: AdvertisementService, 
    },
    {
      provide: 'IAdvertisementRepository',
      useClass: AdvertisementRepository,
    },
  ],
  // 4. EXPORT TOKEN
  exports: [IAdvertisementService],
})
export class AdvertisementModule {}