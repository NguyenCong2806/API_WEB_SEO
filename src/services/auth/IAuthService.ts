import ResultData from 'src/models/BaseModel/ResultData';
import { userlogin } from 'src/models/viewmodel/auth/userlogin';

// Đây là "hợp đồng"
export interface IAuthService {
  // Bất kỳ hàm public nào trong AuthService bạn muốn Controller gọi
  // thì phải được định nghĩa ở đây.
  
  signIn(dto: userlogin): Promise<ResultData>;
  
  refreshToken(userId: string, rt: string): Promise<ResultData>;

  // (Ví dụ: hàm validateUser mà Passport Strategy gọi)
  validateUser(username: string, pass: string): Promise<any>; 
}

// Đây là "Token" (Mã định danh) mà chúng ta sẽ dùng để Inject
export const IAuthService = Symbol('IAuthService');