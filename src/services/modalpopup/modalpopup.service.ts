import { ModalPopup } from './../../models/database/ModalPopup';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IModalPopupservice } from './IModalPopupservice';
import { IModalpopupRepository } from 'src/repository/modalpopup/IModalpopupRepository';

@Injectable()
export class ModalPopupService
  extends BaseService<ModalPopup>
  implements IModalPopupservice
{
  constructor(
    @Inject('IModalpopupRepository')
    private readonly modalpopup_repository: IModalpopupRepository,
  ) {
    super(modalpopup_repository);
  }
}
