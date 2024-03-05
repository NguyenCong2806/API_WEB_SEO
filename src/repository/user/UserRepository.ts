import { User } from './../../models/database/User';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from './IUserRepository';
import { BaseRepository } from '../BaseRepository';

@Injectable()
export class UsersRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(
    @InjectModel(User.name)
    private readonly users_repository: Model<User>,
  ) {
    super(users_repository);
  }
}
