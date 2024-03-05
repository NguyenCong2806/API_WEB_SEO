import { IBaseRepository } from './../IBaseRepository';
import { User } from './../../models/database/User';
export interface IUserRepository extends IBaseRepository<User> {
}
