import { ITabsRepository } from './../../repository/tabs/ITabsRepository';
import { Tabs } from './../../models/database/Tabs';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ITabsService } from './ITabsService';

@Injectable()
export class TabsService extends BaseService<Tabs> implements ITabsService {
  constructor(
    @Inject('ITabsRepository')
    private readonly tabs_repository: ITabsRepository,
  ) {
    super(tabs_repository);
  }
}
