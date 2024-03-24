import { Cta } from './../../models/database/Cta';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ICtaService } from './ICtaService';
import { ICtaRepository } from 'src/repository/Cta/ICtaRepository';

@Injectable()
export class CtaService extends BaseService<Cta> implements ICtaService {
  constructor(
    @Inject('ICtaRepository')
    private readonly cta_repository: ICtaRepository,
  ) {
    super(cta_repository);
  }
}
