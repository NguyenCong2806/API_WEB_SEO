import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode, // <-- 1. THÊM HttpCode
  HttpStatus,
  Inject, // <-- 2. THÊM Inject
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  // Res, // <-- 3. XÓA BỎ @Res
} from '@nestjs/common';
// import { Response } from 'express'; // <-- 3. XÓA BỎ Response

import SerachPara from 'src/models/BaseModel/SerachPara';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard'; // <-- 4. DÙNG GUARD "CHUẨN"
import { AuthMetaData } from 'src/decorator/auth.decorator';
import { IExpertService } from 'src/services/expert/IExpertService'; // <-- 5. DÙNG TOKEN
import { ExpertDto } from 'src/models/viewmodel/expert/ExpertDto';

@Controller('expert')
@UseGuards(JwtAuthGuard) // <-- 7. Áp dụng Guard
export class ExpertController {
  
  // 8. SỬA CONSTRUCTOR ĐỂ DÙNG TOKEN
  constructor(
    @Inject(IExpertService)
    private readonly expertService: IExpertService,
  ) {}

  // 9. SỬA ROUTE, BỎ @Res, BỎ LOGIC
  @Get()
  async get(@Query() serachPara: SerachPara) {
    // Service "thông minh" sẽ lo việc tạo query
    return this.expertService.finds(serachPara);
  }

  // 12. SỬA ROUTE, BỎ @Res
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.expertService.findOne(id);
  }

  // 13. SỬA ROUTE, BỎ @Res, DÙNG DTO, DÙNG HttpCode
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: ExpertDto) {
    return this.expertService.create(createDto);
  }

  // 14. SỬA ROUTE, BỎ @Res, DÙNG DTO, SỬA HÀM "update"
  @Put(':id')
  async update(
    @Param('id') id: string, // <-- Lấy id
    @Body() updateDto: ExpertDto, // <-- Dùng DTO
  ) {
    // Gọi hàm update "chuẩn" (id, dto)
    return this.expertService.update(id, updateDto);
  }

  // 15. SỬA ROUTE, BỎ @Res, DÙNG HttpCode
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.expertService.remove(id);
  }
}