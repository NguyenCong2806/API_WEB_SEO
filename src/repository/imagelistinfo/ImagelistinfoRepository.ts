import { ImageListInfo } from 'src/models/database/ImageListInfo';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IImagelistinfoRepository } from './IImagelistinfoRepository';

@Injectable()
export class ImagelistinfoRepository
  extends BaseRepository<ImageListInfo>
  implements IImagelistinfoRepository
{
  constructor(
    @InjectModel(ImageListInfo.name)
    private readonly imagelistinfo_repository: Model<ImageListInfo>,
  ) {
    super(imagelistinfo_repository);
  }
}
