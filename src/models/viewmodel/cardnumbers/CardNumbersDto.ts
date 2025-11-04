import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CardNumbersDto {
  @IsString()
  @IsNotEmpty({ message: 'Icon không được bỏ trống' })
  icon: string;

  @IsNumber()
  @IsOptional()
  start?: number;

  @IsNumber()
  @IsOptional()
  end?: number;

  @IsString()
  @IsOptional()
  suffix?: string;

  @IsString()
  @IsOptional()
  prefix?: string;

  @IsNumber()
  @IsOptional()
  fontsize?: number;

  @IsNumber()
  @IsOptional()
  fontweight?: number;

  @IsString()
  @IsOptional()
  text?: string;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}