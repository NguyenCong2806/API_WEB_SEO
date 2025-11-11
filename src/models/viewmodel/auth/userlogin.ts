import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class userlogin {
  @IsNotEmpty({ message: 'Tài khoản không được để trống' })
  @IsString({ message: 'Tài khoản phải là chuỗi ký tự' })
  username: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password: string;
}
