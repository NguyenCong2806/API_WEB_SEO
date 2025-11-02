import { IBaseService } from '../IBaseService';
import { Menu } from 'src/models/database/Menu';

export interface IMenuService extends IBaseService<Menu> {}
export const IMenuService = Symbol('IMenuService');
