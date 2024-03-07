import { MediaController } from './../../controllers/media/media.controller';
import { MediaRepository } from './../../repository/media/MediaRepository';
import { Module } from '@nestjs/common';
import { MediaService } from 'src/services/media/media.service';
@Module({
  imports: [],
  controllers: [MediaController],
  providers: [
    MediaService,
    { provide: 'IMediaRepository', useClass: MediaRepository },
  ],
  exports: [MediaService],
})
export class MediaModule {}
