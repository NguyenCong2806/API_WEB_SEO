import { IsString, IsOptional, IsNumber } from 'class-validator';

export class PageContentDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  heading?: string;

  @IsNumber()
  @IsOptional()
  menuid?: number;

  @IsString()
  @IsOptional()
  link?: string;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsString()
  @IsOptional()
  site?: string;
}