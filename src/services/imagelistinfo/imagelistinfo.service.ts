import { ImageListInfo } from 'src/models/database/ImageListInfo';
import { IImagelistinfoRepository } from './../../repository/imagelistinfo/IImagelistinfoRepository';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Iimagelistinfoservice } from './Iimagelistinfoservice';

@Injectable()
export class ImageListInfoService
  extends BaseService<ImageListInfo>
  implements Iimagelistinfoservice
{
  constructor(
    @Inject('IImagelistinfoRepository')
    private readonly imagelistinfo_repository: IImagelistinfoRepository,
  ) {
    super(imagelistinfo_repository);
  }
}
