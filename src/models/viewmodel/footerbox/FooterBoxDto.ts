import { IsString, IsOptional, IsNumber } from 'class-validator';

export class FooterBoxDto {
  @IsString()
  @IsOptional()
  detail?: string;

  @IsNumber()
  @IsOptional()
  oder?: number;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}