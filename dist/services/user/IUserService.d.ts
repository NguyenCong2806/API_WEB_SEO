import { User } from './../../models/database/User';
import { IBaseService } from '../IBaseService';
export interface IUserService extends IBaseService<User> {
}
export declare const IUserService: unique symbol;
