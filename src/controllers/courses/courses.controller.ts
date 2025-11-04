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
import { ICoursesService } from 'src/services/Courses/ICoursesService'; // <-- 5. DÙNG TOKEN
import { CoursesDto } from 'src/models/viewmodel/courses/CoursesDto';

@Controller('courses')
@UseGuards(JwtAuthGuard) // <-- 7. Áp dụng Guard
export class CoursesController {
  
  // 8. SỬA CONSTRUCTOR ĐỂ DÙNG TOKEN
  constructor(
    @Inject(ICoursesService)
    private readonly coursesService: ICoursesService,
  ) {}

  // 9. SỬA ROUTE, BỎ @Res, BỎ LOGIC
  @Get()
  async get(@Query() serachPara: SerachPara) {
    // Service "thông minh" sẽ lo việc tạo query
    return this.coursesService.finds(serachPara);
  }
  // 12. SỬA ROUTE, BỎ @Res
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  // 13. SỬA ROUTE, BỎ @Res, DÙNG DTO, DÙNG HttpCode
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CoursesDto) {
    return this.coursesService.create(createDto);
  }

  // 14. SỬA ROUTE, BỎ @Res, DÙNG DTO, SỬA HÀM "update"
  @Put(':id')
  async update(
    @Param('id') id: string, // <-- Lấy id
    @Body() updateDto: CoursesDto, // <-- Dùng DTO
  ) {
    // Gọi hàm update "chuẩn" (id, dto)
    return this.coursesService.update(id, updateDto);
  }

  // 15. SỬA ROUTE, BỎ @Res, DÙNG HttpCode
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}