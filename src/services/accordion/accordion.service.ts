import { IAccordionRespository } from './../../repository/accordion/IAccordionRepository';
import { Accordion } from './../../models/database/Accordion';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IAccordionService } from './IAccordionService';

@Injectable()
export class AccordionService
  extends BaseService<Accordion>
  implements IAccordionService
{
  constructor(
    @Inject('IAccordionRespository')
    private readonly accordion_repository: IAccordionRespository,
  ) {
    super(accordion_repository);
  }
}
