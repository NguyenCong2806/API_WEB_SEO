import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { BaseEntity } from 'src/models/database/BaseEntity';

export class CreateUserDto extends BaseEntity {
  @IsString()
  @IsNotEmpty({ message: "Không được bỏ trống!" })
  username: string;

  @IsString()
  @IsNotEmpty({ message: "Không được bỏ trống!" })
  @IsEmail()
  email: string;
  role: string;
  @IsString()
  @IsNotEmpty({ message: "Không được bỏ trống!" })
  password: string;
}
