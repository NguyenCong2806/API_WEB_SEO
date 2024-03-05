import { UserSchema } from '../models/database/User';
import { UsersRepository } from '../repository/user/UserRepository';
import { UserService } from '../services/user/user.service';
import { UsersController } from '../controllers/user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule,
  ],
  controllers: [UsersController],
  providers: [
    UserService,
    { provide: 'IUserRepository', useClass: UsersRepository },
  ],
  exports: [UserService],
})
export class UsersModule {}
