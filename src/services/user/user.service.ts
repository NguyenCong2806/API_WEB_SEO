import { IUserRepository } from '../../repository/user/IUserRepository';
import { User } from '../../models/database/User';
import {
  Injectable,
  Inject,
  ConflictException,
} from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IUserService } from './IUserService';

// --- (BẮT ĐẦU IMPORT PHẦN LOGIC) ---
import { plainToInstance } from 'class-transformer';
import * as argon2 from 'argon2';
import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import ResultData from 'src/models/BaseModel/ResultData';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { CreateUserDto } from 'src/models/viewmodel/user/CreateUserDto';
import { UpdateUserDto } from 'src/models/viewmodel/user/UpdateUserDto';

@Injectable()
export class UserService extends BaseService<User> implements IUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly users_repository: IUserRepository,
  ) {
    super(users_repository);
  }
  async create(dto: CreateUserDto): Promise<ResultData> {

    const userExists = await this.users_repository.checkkeyword({
      $or: [{ username: dto.username }, { email: dto.email }],
    } as FilterQuery<User>);

    if (userExists.item) {
      throw new ConflictException('Username hoặc Email đã tồn tại.');
    }
    const hashedPassword = await argon2.hash(dto.password);
    const newUserModel = plainToInstance(User, dto);
    newUserModel.password = hashedPassword;
    newUserModel.role = dto.role || 'admin';
    return  await this.users_repository.create(newUserModel);
  }
  async update(id: string, dto: UpdateUserDto): Promise<ResultData> {
    const updateData = plainToInstance(User, dto);
    if (dto.password) {
      updateData.password = await argon2.hash(dto.password);
    }
    return await super.update(id, updateData);
  }
  async finds(serachPara: SerachPara): Promise<Results<User>> {

    const pagination = new Paginations<User>();
    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;

    const condition: FilterQuery<User> = {};
    if (serachPara.keyword && serachPara.keyword.trim() !== '') {
      condition.username = { $regex: serachPara.keyword, $options: 'i' };
    }
    pagination.condition = condition;

    return await super.finds(pagination);
  }
}