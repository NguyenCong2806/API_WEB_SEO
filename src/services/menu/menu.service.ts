import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Menu } from 'src/models/database/Menu';
import { IMenuService } from './IMenu.service';
import { IMenuRepository } from 'src/repository/menu/IMenu.repository';

@Injectable()
export class MenuService
  extends BaseService<Menu>
  implements IMenuService
{
  constructor(
    @Inject('IMenuRepository')
    private readonly menu_repository: IMenuRepository,
  ) {
    super(menu_repository);
  }
}
