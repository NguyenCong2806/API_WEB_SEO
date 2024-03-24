import { MajorsNote } from './../../models/database/MajorsNote';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IMajorsNoteRepository } from './IMajorsNoteRepository';

@Injectable()
export class MajorsNoteRepository
  extends BaseRepository<MajorsNote>
  implements IMajorsNoteRepository
{
  constructor(
    @InjectModel(MajorsNote.name)
    private readonly majorsnote_repository: Model<MajorsNote>,
  ) {
    super(majorsnote_repository);
  }
}
