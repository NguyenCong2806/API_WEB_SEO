import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Media } from 'src/models/database/Media';
import { IMediaRepository } from './IMediaRepository';


@Injectable()
export class MediaRepository
  extends BaseRepository<Media>
  implements IMediaRepository
{
  constructor(
    @InjectModel(Media.name)
    private readonly media_repository: Model<Media>,
  ) {
    super(media_repository);
  }
}
