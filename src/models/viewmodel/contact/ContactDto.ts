import { IsString, IsOptional, IsNumber } from 'class-validator';

export class ContactDto {
  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  detail?: string;

  @IsString()
  @IsOptional()
  link?: string;

  @IsString()
  @IsOptional()
  linkfacebook?: string;

  @IsString()
  @IsOptional()
  linkyoutobe?: string;

  @IsString()
  @IsOptional()
  linkin?: string;

  @IsString()
  @IsOptional()
  linktwitter?: string;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}