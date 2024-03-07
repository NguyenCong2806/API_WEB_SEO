import { MediaRepository } from './../../repository/media/MediaRepository';
import { MediaSchema } from './../../models/database/Media';
import { MediaController } from './../../controllers/media/media.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaService } from 'src/services/media/media.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Media', schema: MediaSchema }]),
  ],
  controllers: [MediaController],
  providers: [
    MediaService,
    { provide: 'IMediaRepository', useClass: MediaRepository },
  ],
  exports: [MediaService],
})
export class MediaModule {}
