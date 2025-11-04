import { IsString, IsOptional, IsNumber } from 'class-validator';

export class MajorsNoteDto {
  @IsString()
  @IsOptional()
  heading?: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsNumber()
  @IsOptional()
  fontsize?: number;

  @IsNumber()
  @IsOptional()
  fontweight?: number;

  @IsString()
  @IsOptional()
  site?: string;

  @IsNumber()
  @IsOptional()
  location?: number;
}