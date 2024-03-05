import { IUserRepository } from '../../repository/user/IUserRepository';
import { User } from '../../models/database/User';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IUserService } from './IUserService';

@Injectable()
export class UserService extends BaseService<User> implements IUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly users_repository: IUserRepository,
  ) {
    super(users_repository);
  }
}
