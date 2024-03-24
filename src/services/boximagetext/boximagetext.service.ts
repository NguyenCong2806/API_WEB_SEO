import { IBoximagetextRepository } from './../../repository/boximagetext/IBoximagetextRepository';
import { BoxImageText } from './../../models/database/BoxImageText';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IBoximagetextService } from './IBoximagetextService';

@Injectable()
export class BoximagetextService
  extends BaseService<BoxImageText>
  implements IBoximagetextService
{
  constructor(
    @Inject('IBoximagetextRepository')
    private readonly boximagetext_repository: IBoximagetextRepository,
  ) {
    super(boximagetext_repository);
  }
}
