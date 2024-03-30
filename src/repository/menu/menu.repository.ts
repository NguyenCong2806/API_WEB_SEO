import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { Menu } from 'src/models/database/Menu';
import { IMenuRepository } from './IMenu.repository';

@Injectable()
export class MenuRepository
  extends BaseRepository<Menu>
  implements IMenuRepository
{
  constructor(
    @InjectModel(Menu.name)
    private readonly menu_repository: Model<Menu>,
  ) {
    super(menu_repository);
  }
}
