import { MediaRepository } from './../../repository/media/MediaRepository';
import { MediaSchema } from './../../models/database/Media';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaService } from 'src/services/media/media.service';
import { IMediaService } from 'src/services/media/IMediaService'; // <-- 2. IMPORT TOKEN
import { MediaController } from 'src/controllers/media/media.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Media', schema: MediaSchema }]),
  ],
  controllers: [MediaController],
  providers: [
    {
      provide: IMediaService, 
      useClass: MediaService,  
    },
    { provide: 'IMediaRepository', useClass: MediaRepository },
  ],
  // 4. EXPORT TOKEN
  exports: [IMediaService],
})
export class MediaModule {}