import { IsString, IsOptional, IsNumber } from 'class-validator';

export class ParallaxDto {
  @IsString()
  @IsOptional()
  bgimage?: string;

  @IsString()
  @IsOptional()
  bgimagealt?: string;

  @IsNumber()
  @IsOptional()
  strength?: number;

  @IsNumber()
  @IsOptional()
  blurmin?: number;

  @IsNumber()
  @IsOptional()
  blurmax?: number;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsString()
  @IsOptional()
  site?: string;
}