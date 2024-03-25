import { ModalPopup } from './../../models/database/ModalPopup';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IModalpopupRepository } from './IModalpopupRepository';

@Injectable()
export class ModalpopupRepository
  extends BaseRepository<ModalPopup>
  implements IModalpopupRepository
{
  constructor(
    @InjectModel(ModalPopup.name)
    private readonly modalpopup_repository: Model<ModalPopup>,
  ) {
    super(modalpopup_repository);
  }
}
