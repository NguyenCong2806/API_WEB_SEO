import { User } from './../../models/database/User';
import { IBaseService } from '../IBaseService';

export interface IUserService extends IBaseService<User> {}
export const IUserService = Symbol('IUserService');