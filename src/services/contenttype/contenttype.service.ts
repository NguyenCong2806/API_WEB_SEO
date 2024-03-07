import { Contenttype } from './../../models/database/Contenttype';

import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IContenttypeService } from './IContenttypeService';
import { IContenttypeRepository } from 'src/repository/contenttype/IContenttypeRepository';

@Injectable()
export class ContenttypeService
  extends BaseService<Contenttype>
  implements IContenttypeService
{
  constructor(
    @Inject('IContenttypeRepository')
    private readonly contenttype_repository: IContenttypeRepository,
  ) {
    super(contenttype_repository);
  }
}
