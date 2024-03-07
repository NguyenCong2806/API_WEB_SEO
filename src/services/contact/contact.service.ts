import { IContactRepository } from './../../repository/Contact/IContactRepository';
import { Contact } from './../../models/database/Contact';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IContactService } from './IContactService';

@Injectable()
export class ContactService
  extends BaseService<Contact>
  implements IContactService
{
  constructor(
    @Inject('IContactRepository')
    private readonly contact_repository: IContactRepository,
  ) {
    super(contact_repository);
  }
}
