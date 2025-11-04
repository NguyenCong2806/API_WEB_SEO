import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class ModalPopupDto {
  @IsString()
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  isshow?: boolean;

  @IsString()
  @IsOptional()
  link?: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsString()
  @IsOptional()
  titel?: string;

  @IsNumber()
  @IsOptional()
  timestart?: number;

  @IsNumber()
  @IsOptional()
  timeend?: number;

  @IsNumber()
  @IsOptional()
  position?: number;

  @IsNumber()
  @IsOptional()
  scrollstart?: number;

  @IsNumber()
  @IsOptional()
  scrollend?: number;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsString()
  @IsOptional()
  site?: string;
}