import { Accordion } from './../../models/database/Accordion';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IAccordionRespository } from './IAccordionRepository';

@Injectable()
export class AccordionRespository
  extends BaseRepository<Accordion>
  implements IAccordionRespository
{
  constructor(
    @InjectModel(Accordion.name)
    private readonly accordion_repository: Model<Accordion>,
  ) {
    super(accordion_repository);
  }
}
