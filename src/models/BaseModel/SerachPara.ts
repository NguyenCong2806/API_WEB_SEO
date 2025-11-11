// Backend: src/models/BaseModel/SerachPara.ts
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export default class SerachPara {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageindex: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pagesize: number = 10;

  @IsOptional()
  @IsString()
  keyword?: string = '';
}