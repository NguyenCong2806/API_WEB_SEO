import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsMongoId,
} from 'class-validator';

export class ContentDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsOptional()
  detail?: string;

  @IsNumber()
  @IsOptional()
  oder?: number;

  @IsString()
  @IsOptional()
  link?: string;

  @IsString()
  @IsOptional()
  img?: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsBoolean()
  @IsOptional()
  tophot?: boolean;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsMongoId({ message: 'Contenttype ID không hợp lệ' })
  @IsOptional()
  contenttypes?: string;
}