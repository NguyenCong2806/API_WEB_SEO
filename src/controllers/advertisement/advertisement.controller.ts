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

import SerachPara from 'src/models/BaseModel/SerachPara';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard'; // <-- 4. DÙNG GUARD "CHUẨN"
import { IAdvertisementService } from 'src/services/advertisement/IAdvertisement.Service';
import { AdvertisementDto } from 'src/models/viewmodel/advertisement/AdvertisementDto';


@Controller('advertisement')
@UseGuards(JwtAuthGuard) // <-- 7. Áp dụng Guard
export class AdvertisementController {
  
  // 8. SỬA CONSTRUCTOR ĐỂ DÙNG TOKEN
  constructor(
    @Inject(IAdvertisementService)
    private readonly advertisementService: IAdvertisementService,
  ) {}

  // 9. SỬA ROUTE, BỎ @Res, BỎ LOGIC
  @Get()
  async get(@Query() serachPara: SerachPara) {
    // Service "thông minh" sẽ lo việc tạo query
    return this.advertisementService.finds(serachPara);
  }

  // 10. BỎ @Res
  @Get('getalls') // (Giữ nguyên route này)
  async getalls() {
    return this.advertisementService.find();
  }

  // // 11. BỎ @Res, BỎ LOGIC
  // @AuthMetaData('skipAuthCheck')
  // @Get('getfind') // (Giữ nguyên route này)
  // async finds(@Query() parainfo: SiteParameter) {
  //   // Service "thông minh" sẽ lo việc tạo query
  //   return this.advertisementService.findsBySite(parainfo);
  // }

  // 12. SỬA ROUTE, BỎ @Res
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.advertisementService.findOne(id);
  }

  // 13. SỬA ROUTE, BỎ @Res, DÙNG DTO, DÙNG HttpCode
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: AdvertisementDto) {
    return this.advertisementService.create(createDto);
  }

  // 14. SỬA ROUTE, BỎ @Res, DÙNG DTO, SỬA HÀM "update"
  @Put(':id')
  async update(
    @Param('id') id: string, // <-- Lấy id
    @Body() updateDto: AdvertisementDto, // <-- Dùng DTO
  ) {
    // Gọi hàm update "chuẩn" (id, dto)
    return this.advertisementService.update(id, updateDto);
  }

  // 15. SỬA ROUTE, BỎ @Res, DÙNG HttpCode
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.advertisementService.remove(id);
  }
}