import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class ArticleHeaderDto {
  @IsString()
  @IsOptional()
  headingheader?: string;

  @IsString()
  @IsOptional()
  headingbody?: string;

  @IsString()
  @IsOptional()
  headingfooter?: string;

  @IsNumber()
  @IsOptional()
  location?: number;

  @IsNumber()
  @IsOptional()
  fontsize?: number;

  @IsNumber()
  @IsOptional()
  fontweight?: number;

  @IsBoolean()
  @IsOptional()
  isdivider?: boolean;

  @IsString()
  @IsOptional()
  site?: string;
}