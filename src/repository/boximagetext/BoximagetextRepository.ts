import { BoxImageText } from './../../models/database/BoxImageText';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IBoximagetextRepository } from './IBoximagetextRepository';

@Injectable()
export class BoximagetextRespository
  extends BaseRepository<BoxImageText>
  implements IBoximagetextRepository
{
  constructor(
    @InjectModel(BoxImageText.name)
    private readonly boximagetext_repository: Model<BoxImageText>,
  ) {
    super(boximagetext_repository);
  }
}
