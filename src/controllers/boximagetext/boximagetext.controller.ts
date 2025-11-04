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
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard'; // <-- 4. DÙNG GUARD "CHUẨN"
import { IBoximagetextService } from 'src/services/boximagetext/IBoximagetextService'; // <-- 5. DÙNG TOKEN
import { BoxImageTextDto } from 'src/models/viewmodel/boxImagetext/BoxImageTextDto';


@Controller('boximagetext')
@UseGuards(JwtAuthGuard) // <-- 7. Áp dụng Guard
export class BoxImageTextController {

  // 8. SỬA CONSTRUCTOR ĐỂ DÙNG TOKEN
  constructor(
    @Inject(IBoximagetextService)
    private readonly boxImageTextService: IBoximagetextService,
  ) { }

  // 9. SỬA ROUTE, BỎ @Res, BỎ LOGIC
  @Get()
  async get(@Query() serachPara: SerachPara) {
    // Service "thông minh" sẽ lo việc tạo query
    return this.boxImageTextService.finds(serachPara);
  }

  // 10. BỎ @Res
  @Get('getalls') // (Giữ nguyên route này)
  async getalls() {
    return this.boxImageTextService.find();
  }

  // 12. SỬA ROUTE, BỎ @Res
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.boxImageTextService.findOne(id);
  }

  // 13. SỬA ROUTE, BỎ @Res, DÙNG DTO, DÙNG HttpCode
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: BoxImageTextDto) {
    return this.boxImageTextService.create(createDto);
  }

  // 14. SỬA ROUTE, BỎ @Res, DÙNG DTO, SỬA HÀM "update"
  @Put(':id')
  async update(
    @Param('id') id: string, // <-- Lấy id
    @Body() updateDto: BoxImageTextDto, // <-- Dùng DTO
  ) {
    // Gọi hàm update "chuẩn" (id, dto)
    return this.boxImageTextService.update(id, updateDto);
  }

  // 15. SỬA ROUTE, BỎ @Res, DÙNG HttpCode
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.boxImageTextService.remove(id);
  }
}