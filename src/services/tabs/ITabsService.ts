import { IBaseService } from '../IBaseService';
import { Tabs } from 'src/models/database/Tabs';

export interface ITabsService extends IBaseService<Tabs> {}
export const ITabsService = Symbol('ITabsService');
