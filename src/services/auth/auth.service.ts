/* eslint-disable @typescript-eslint/no-unused-vars */
import { authvm } from './../../models/viewmodel/auth/authvm';
import { userlogin } from './../../models/viewmodel/auth/userlogin';
import {
  BadRequestException,
  Inject, // <-- 1. Import 'Inject'
  Injectable,
  NotImplementedException, // (Dùng cho các hàm chưa làm)
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUserService } from '../user/IUserService'; // <-- 2. Import Interface (Token)
import { IAuthService } from './IAuthService'; // <-- 3. Import Interface (Hợp đồng)
import ResultData from 'src/models/BaseModel/ResultData'; // <-- 4. Import ResultData

@Injectable()
// 5. Khai báo "implements IAuthService"
export class AuthService implements IAuthService {
  constructor(
    // 6. Sửa Constructor để Inject bằng Token "IUserService"
    @Inject(IUserService) private readonly usersService: IUserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Triển khai hàm signIn từ IAuthService
   */
  async signIn(data: userlogin): Promise<ResultData> {
    // 7. Hàm signIn bây giờ trả về ResultData
    const res = new ResultData();

    // 8. Lấy kết quả từ service (luôn là một ResultData)
    const userResult = await this.usersService.findOneValue({
      username: data.username,
    });

    // 9. Kiểm tra xem user có tồn tại không (dựa trên chuẩn ResultData)
    if (!userResult.status || !userResult.item) {
      throw new BadRequestException('Tài khoản không tồn tại!');
    }

    // Lấy user từ .item
    const user = userResult.item;

    const passwordMatches = await argon2.verify(user.password, data.password);
    if (!passwordMatches) {
      throw new BadRequestException('Nhập sai mật khẩu!');
    }

    const payload = {
      sub: user._id.toString(), // Dùng sub (subject) theo chuẩn JWT
      username: user.username,
      role: user.role,
    };

    // Tạo access và refresh token
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRE,
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_REFRESH,
      expiresIn: process.env.JWT_EXPIRE_REFRESH,
    });

    // 10. Đóng gói dữ liệu trả về (authvm) VÀO TRONG res.item
    const authData = new authvm();
    authData.message = 'Đăng nhập thành công';
    authData.role = user.role;
    authData.status = true;
    authData.statuscode = 200;
    authData.userid = user._id.toString();
    authData.username = user.username;
    authData.accessToken = accessToken;
    authData.refreshToken = refreshToken;

    // Hoàn thành ResultData
    res.status = true;
    res.message = 'Đăng nhập thành công';
    res.statuscode = 200;
    res.item = authData; // <-- Gán authData vào .item

    return res;
  }

  /**
   * Triển khai hàm refreshToken từ IAuthService
   * (Hiện tại chưa code logic)
   */
  async refreshToken(userId: string, rt: string): Promise<ResultData> {
    // Bạn sẽ code logic refresh token ở đây
    throw new NotImplementedException('Chức năng chưa được triển khai');
  }

  /**
   * Triển khai hàm validateUser từ IAuthService
   * (Hàm này thường được dùng bởi LocalStrategy của Passport)
   */
  async validateUser(username: string, pass: string): Promise<any> {
    const userResult = await this.usersService.findOneValue({ username: username });

    if (userResult.status && userResult.item) {
      const user = userResult.item;
      const passwordMatches = await argon2.verify(user.password, pass);

      if (passwordMatches) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user.toObject(); // Trả về user (bỏ password)
        return result;
      }
    }
    return null; // Passport sẽ tự ném lỗi 401 nếu hàm này trả về null
  }

  // (Các hàm phụ trợ có thể giữ nguyên)
  async logout() {
    // code logic logout...
  }

  hashData(data: string) {
    return argon2.hash(data);
  }
}