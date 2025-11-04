import { IUserRepository } from '../../repository/user/IUserRepository';
import { User } from '../../models/database/User';
import { BaseService } from '../BaseService';
import { IUserService } from './IUserService';
import Results from 'src/models/BaseModel/Results';
import ResultData from 'src/models/BaseModel/ResultData';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { CreateUserDto } from 'src/models/viewmodel/user/CreateUserDto';
import { UpdateUserDto } from 'src/models/viewmodel/user/UpdateUserDto';
export declare class UserService extends BaseService<User> implements IUserService {
    private readonly users_repository;
    constructor(users_repository: IUserRepository);
    create(dto: CreateUserDto): Promise<ResultData>;
    update(id: string, dto: UpdateUserDto): Promise<ResultData>;
    finds(serachPara: SerachPara): Promise<Results<User>>;
}
