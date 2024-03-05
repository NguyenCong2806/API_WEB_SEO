import { RefreshTokenStrategy } from './../../utils/auth/strategies/refreshToken.strategy';
import { AccessTokenStrategy } from './../../utils/auth/strategies/accessToken.strategy';
import { AuthService } from './../../services/auth/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from '../user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, PassportModule,JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn:process.env.JWT_EXPIRE  },
  })],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
 exports:[AuthService]
})
export class AuthModule {}
