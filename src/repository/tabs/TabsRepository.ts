import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Tabs } from 'src/models/database/Tabs';
import { ITabsRepository } from './ITabsRepository';

@Injectable()
export class TabsRepository
  extends BaseRepository<Tabs>
  implements ITabsRepository
{
  constructor(
    @InjectModel(Tabs.name)
    private readonly tabs_repository: Model<Tabs>,
  ) {
    super(tabs_repository);
  }
}
