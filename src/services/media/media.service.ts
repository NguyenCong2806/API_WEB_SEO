import { MediaRepository } from './../../repository/media/MediaRepository';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Media } from 'src/models/database/Media';
import { IMediaService } from './IMediaService';

@Injectable()
export class MediaService extends BaseService<Media> implements IMediaService {
  constructor(
    @Inject('IMediaRepository')
    private readonly media_repository: MediaRepository,
  ) {
    super(media_repository);
  }
}
