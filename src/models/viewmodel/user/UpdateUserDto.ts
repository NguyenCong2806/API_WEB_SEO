// UpdateUserDto.ts (Phiên bản ĐÃ SỬA ĐÚNG)

import {
  IsString,
  IsEmail,
  IsOptional, // <-- Quan trọng: Mọi trường đều là tùy chọn
  MinLength,
} from 'class-validator';

// (Bạn nên đổi tên class/file này thành UpdateUserDto)
export class UpdateUserDto {
  
  @IsString()
  @IsOptional() // <-- Thêm @IsOptional()
  username?: string; // <-- Thêm "?"

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsString()
  @MinLength(8, { message: 'Mật khẩu mới phải dài ít nhất 8 ký tự' })
  @IsOptional()
  password?: string; // (Cho phép cập nhật password)
}