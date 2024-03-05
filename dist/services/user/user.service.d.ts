import { IUserRepository } from '../../repository/user/IUserRepository';
import { User } from '../../models/database/User';
import { BaseService } from '../BaseService';
import { IUserService } from './IUserService';
export declare class UserService extends BaseService<User> implements IUserService {
    private readonly users_repository;
    constructor(users_repository: IUserRepository);
}
