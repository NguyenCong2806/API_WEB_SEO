import { IsString, IsOptional, IsNumber } from 'class-validator';

export class LogoDto {
  @IsString()
  @IsOptional()
  image?: string;

  @IsNumber()
  @IsOptional()
  height?: number;

  @IsNumber()
  @IsOptional()
  width?: number;

  @IsString()
  @IsOptional()
  link?: string;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsString()
  @IsOptional()
  site?: string;
}