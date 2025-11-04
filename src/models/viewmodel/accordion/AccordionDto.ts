// File: CreateAccordionDto.ts

import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class AccordionDto {
  @IsString()
  @IsOptional() // (Icon có thể không bắt buộc)
  icon?: string;

  @IsString()
  @IsNotEmpty({ message: 'Tiêu đề (title) không được bỏ trống!' })
  title: string;

  @IsString()
  @IsOptional()
  detail?: string;

  @IsNumber()
  @IsOptional()
  defaultindex?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Vị trí (location) không được bỏ trống!' })
  location: number;

  @IsString()
  @IsNotEmpty({ message: 'Trang (site) không được bỏ trống!' })
  site: string;
}