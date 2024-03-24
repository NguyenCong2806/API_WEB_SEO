import { MajorsNote } from './../../models/database/MajorsNote';
import { IMajorsNoteRepository } from './../../repository/majorsnote/IMajorsNoteRepository';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IMajorsNoteService } from './IMajorsNoteService';

@Injectable()
export class MajorsNoteService
  extends BaseService<MajorsNote>
  implements IMajorsNoteService
{
  constructor(
    @Inject('IMajorsNoteRepository')
    private readonly majorsnote_repository: IMajorsNoteRepository,
  ) {
    super(majorsnote_repository);
  }
}
