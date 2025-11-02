import { IsString, IsOptional, IsNumber } from 'class-validator';

export class MediaDto {
  @IsString()
  @IsOptional()
  path?: string;

  @IsNumber()
  @IsOptional()
  size?: number;

  @IsString()
  @IsOptional()
  destination?: string;

  @IsString()
  @IsOptional()
  encoding?: string;

  @IsString()
  @IsOptional()
  fieldname?: string;

  @IsString()
  @IsOptional()
  filename?: string;

  @IsString()
  @IsOptional()
  mimetype?: string;

  @IsString()
  @IsOptional()
  originalname?: string;
}