import { IsString, IsOptional, IsNumber } from 'class-validator';

export class TabsDto {
  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  label?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}