import { IFooterBoxRepository } from './../../repository/FooterBox/IFooterBoxRepository';
import { FooterBox } from './../../models/database/FooterBox';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IFooterBoxService } from './Ifooterbox.service';

@Injectable()
export class FooterBoxService
  extends BaseService<FooterBox>
  implements IFooterBoxService
{
  constructor(
    @Inject('IfooterboxRepository')
    private readonly footerbox_repository: IFooterBoxRepository,
  ) {
    super(footerbox_repository);
  }
}
