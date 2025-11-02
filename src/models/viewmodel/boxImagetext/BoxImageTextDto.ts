import { IsString, IsOptional, IsNumber } from 'class-validator';

export class BoxImageTextDto {
  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  heading?: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsNumber()
  @IsOptional()
  position?: number;

  @IsString()
  @IsOptional()
  site?: string;
}