import { IMediaRepository } from './../../repository/media/IMediaRepository';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Media } from 'src/models/database/Media';
import { IMediaService } from './IMediaService';

@Injectable()
export class MediaService extends BaseService<Media> implements IMediaService {
  constructor(
    @Inject('IMediaRepository')
    private readonly media_repository: IMediaRepository,
  ) {
    super(media_repository);
  }
}
