import { Contact } from './../../models/database/Contact';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IContactRepository } from './IContactRepository';

@Injectable()
export class ContactRepository
  extends BaseRepository<Contact>
  implements IContactRepository
{
  constructor(
    @InjectModel(Contact.name)
    private readonly contact_repository: Model<Contact>,
  ) {
    super(contact_repository);
  }
}
