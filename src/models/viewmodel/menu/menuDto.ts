import { IsString, IsOptional, IsNumber } from 'class-validator';

export class MenuDto {
  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  menuid?: number;

  @IsNumber()
  @IsOptional()
  menuchildid?: number;

  @IsString()
  @IsOptional()
  heading?: string;

  @IsString()
  @IsOptional()
  link?: string;

  @IsNumber()
  @IsOptional()
  fontsize?: number;

  @IsNumber()
  @IsOptional()
  fontweight?: number;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsString()
  @IsOptional()
  site?: string;
}