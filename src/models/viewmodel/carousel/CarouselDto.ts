import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CarouselDto {
  @IsString()
  @IsNotEmpty({ message: 'Heading không được bỏ trống' })
  heading: string;

  @IsString()
  @IsNotEmpty({ message: 'Title không được bỏ trống' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Img không được bỏ trống' })
  img: string;

  @IsString()
  @IsNotEmpty({ message: 'Detail không được bỏ trống' })
  detail: string;

  @IsString()
  @IsNotEmpty({ message: 'Link không được bỏ trống' })
  link: string;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}