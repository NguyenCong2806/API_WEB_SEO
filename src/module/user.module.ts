import { UserSchema } from '../models/database/User';
import { UsersRepository } from '../repository/user/UserRepository';
import { UserService } from '../services/user/user.service';
import { UsersController } from '../controllers/user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IUserService } from 'src/services/user/IUserService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: IUserService,
      useClass: UserService,
    },
    { provide: 'IUserRepository', useClass: UsersRepository },
  ],
  exports: [IUserService],
})
export class UsersModule {}