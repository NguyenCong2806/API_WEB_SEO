import { userlogin } from 'src/models/viewmodel/auth/userlogin';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseGuards,
  Req,
  Res, // (Nếu không muốn dùng Decorator)
} from '@nestjs/common';
import { Response } from 'express';
import ResultData from 'src/models/BaseModel/ResultData';
import { IAuthService } from 'src/services/auth/IAuthService';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard';
import { RefreshTokenGuard } from 'src/Guard/refresh-token.guard';
import { GetCurrentUser } from 'src/decorator/get-current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(IAuthService) private readonly authService: IAuthService,
  ) { }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: userlogin): Promise<ResultData> {
    return await this.authService.signIn(signInDto);
  }

  // 2. THÊM ENDPOINT MỚI
  /**
   * Endpoint này dùng để cấp lại Access Token khi nó hết hạn.
   * Nó yêu cầu một Refresh Token (đã được xác thực bởi RefreshTokenGuard).
   */
  @Post('refresh')
  @UseGuards(RefreshTokenGuard) // <-- Dùng Guard mới
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    // 3. Dùng Decorator để lấy thông tin "sạch sẽ"
    // (RefreshTokenStrategy của bạn trả về { ...payload, refreshToken })
    @GetCurrentUser('sub') userId: string, // <-- Lấy 'sub' (userId) từ payload
    @GetCurrentUser('refreshToken') refreshToken: string, // <-- Lấy 'refreshToken'
  ): Promise<ResultData> {
    // (Đảm bảo IAuthService của bạn có hàm refreshToken)
    return this.authService.refreshToken(userId, refreshToken);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async logout(
    @GetCurrentUser('sub') userId: string,
    @Res({ passthrough: true }) response: Response // <-- 3. Inject Response
  ) {
    // Gọi service nếu cần xử lý dưới DB (ví dụ xóa hashed token)
    // await this.authService.logout(userId);

    // 4. Xóa HttpOnly Cookie
    // LƯU Ý: Các options (path, secure, sameSite) PHẢI KHỚP
    // với lúc bạn set-cookie thì mới xóa được.
    response.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true, // Đặt true nếu chạy HTTPS (production) 
      sameSite: 'strict',
      path: '/',    // Phải khớp với path khi set cookie
    });

    const res = new ResultData();
    res.status = true;
    res.message = 'Đăng xuất thành công';
    res.statuscode = HttpStatus.OK;
    return res;
  }
}