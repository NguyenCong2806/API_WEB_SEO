import { ModalpopupRepository } from './../../repository/modalpopup/ModalpopupRepository';
import { ModalPopup } from './../../models/database/ModalPopup';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IModalPopupservice } from './IModalPopupservice';

@Injectable()
export class ModalPopupService
  extends BaseService<ModalPopup>
  implements IModalPopupservice
{
  constructor(
    @Inject('IModalpopupRepository')
    private readonly modalpopup_repository: ModalpopupRepository,
  ) {
    super(modalpopup_repository);
  }
}
