import { userlogin } from 'src/models/viewmodel/auth/userlogin';
import { AuthService } from './../../services/auth/auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { authvm } from 'src/models/viewmodel/auth/authvm';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async signIn(@Body() signInDto: userlogin): Promise<authvm> {
    return await this.authService.signIn(signInDto);
  }
  @Get('logout')
  logout() {
    this.authService.logout();
  }
}
