import { User } from './../../models/database/User';
import { Model } from 'mongoose';
import { IUserRepository } from './IUserRepository';
import { BaseRepository } from '../BaseRepository';
export declare class UsersRepository extends BaseRepository<User> implements IUserRepository {
    private readonly users_repository;
    constructor(users_repository: Model<User>);
}
