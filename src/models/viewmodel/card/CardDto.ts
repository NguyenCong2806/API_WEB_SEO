import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CardDto {
  @IsString()
  @IsNotEmpty({ message: 'Icon không được bỏ trống' })
  icon: string;

  @IsString()
  @IsNotEmpty({ message: 'Title không được bỏ trống' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Detail không được bỏ trống' })
  detail: string;

  @IsString()
  @IsNotEmpty({ message: 'Link không được bỏ trống' })
  link: string;

  @IsNumber()
  @IsOptional()
  fontsize?: number;

  @IsNumber()
  @IsOptional()
  fontweight?: number;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}