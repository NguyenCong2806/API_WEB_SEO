import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Logo } from 'src/models/database/Logo';
import { ILogoRepository } from './ILogoRepository';

@Injectable()
export class LogoRepository
  extends BaseRepository<Logo>
  implements ILogoRepository
{
  constructor(
    @InjectModel(Logo.name)
    private readonly logo_repository: Model<Logo>,
  ) {
    super(logo_repository);
  }
}
