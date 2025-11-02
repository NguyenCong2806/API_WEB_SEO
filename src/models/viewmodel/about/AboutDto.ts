import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AboutDto {
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  icon: string;
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  title: string;
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  img: string;
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  detail: string;
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  textlist: Array<string>;
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  link: string;
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  site: string;
}
