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
} from '@nestjs/common';
// import { Response } from 'express'; // <-- 3. XÓA BỎ Response
import SerachPara from 'src/models/BaseModel/SerachPara';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard'; 
import { MenuDto } from 'src/models/viewmodel/menu/menuDto';
import { IModalPopupservice } from 'src/services/modalpopup/IModalPopupservice';
import { ModalPopupDto } from 'src/models/viewmodel/modalpopup/ModalPopupDto';


@Controller('modalpopup')
@UseGuards(JwtAuthGuard) // <-- 7. Áp dụng Guard
export class ModalPopupController {
  
  // 8. SỬA CONSTRUCTOR ĐỂ DÙNG TOKEN
  constructor(
    @Inject(IModalPopupservice)
    private readonly modalpopupService: IModalPopupservice,
  ) {}
  @Get()
  async get(@Query() serachPara: SerachPara) {
    return this.modalpopupService.finds(serachPara);
  }

  // 12. SỬA ROUTE, BỎ @Res
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.modalpopupService.findOne(id);
  }

  // 13. SỬA ROUTE, BỎ @Res, DÙNG DTO, DÙNG HttpCode
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: ModalPopupDto) {
    return this.modalpopupService.create(createDto);
  }

  // 14. SỬA ROUTE, BỎ @Res, DÙNG DTO, SỬA HÀM "update"
  @Put(':id')
  async update(
    @Param('id') id: string, // <-- Lấy id
    @Body() updateDto: ModalPopupDto, // <-- Dùng DTO
  ) {
    // Gọi hàm update "chuẩn" (id, dto)
    return this.modalpopupService.update(id, updateDto);
  }

  // 15. SỬA ROUTE, BỎ @Res, DÙNG HttpCode
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.modalpopupService.remove(id);
  }
}