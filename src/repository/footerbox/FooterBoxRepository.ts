import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { FooterBox } from 'src/models/database/FooterBox';
import { IFooterBoxRepository } from './IFooterBoxRepository';

@Injectable()
export class FooterBoxRepository
  extends BaseRepository<FooterBox>
  implements IFooterBoxRepository
{
  constructor(
    @InjectModel(FooterBox.name)
    private readonly footerBox_repository: Model<FooterBox>,
  ) {
    super(footerBox_repository);
  }
}
