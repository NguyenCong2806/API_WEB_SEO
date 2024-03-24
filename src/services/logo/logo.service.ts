import { Logo } from './../../models/database/Logo';
import { ILogoRepository } from './../../repository/Logo/ILogoRepository';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ILogoService } from './ILogoService';

@Injectable()
export class LogoService extends BaseService<Logo> implements ILogoService {
  constructor(
    @Inject('ILogoRepository')
    private readonly logo_repository: ILogoRepository,
  ) {
    super(logo_repository);
  }
}
