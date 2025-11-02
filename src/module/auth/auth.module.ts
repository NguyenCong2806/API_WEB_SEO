import { RefreshTokenStrategy } from './../../utils/auth/strategies/refreshToken.strategy';
import { AccessTokenStrategy } from './../../utils/auth/strategies/accessToken.strategy';
import { AuthService } from './../../services/auth/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from '../user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { IAuthService } from 'src/services/auth/IAuthService'; // <-- 2. IMPORT TOKEN

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: IAuthService, // <-- Token (Giá trị)
      useClass: AuthService,  // <-- Class (Thực thi)
    },
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  exports: [IAuthService, JwtModule],
})
export class AuthModule { }