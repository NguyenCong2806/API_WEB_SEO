import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class FeedbackDto {
  @IsString()
  @IsNotEmpty({ message: 'Icon không được bỏ trống' })
  icon: string;

  @IsString()
  @IsNotEmpty({ message: 'Title không được bỏ trống' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Detail không được bỏ trống' })
  detail: string;

  @IsString()
  @IsOptional()
  job?: string;

  @IsString()
  @IsOptional()
  img?: string;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsString()
  @IsOptional()
  site?: string;
}