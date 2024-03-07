import { IAboutRepository } from './../../repository/about/IAboutRepository';
import { About } from './../../models/database/About';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IAboutService } from './IAboutService';

@Injectable()
export class AboutService extends BaseService<About> implements IAboutService {
  constructor(
    @Inject('IAboutRepository')
    private readonly about_repository: IAboutRepository,
  ) {
    super(about_repository);
  }
}
