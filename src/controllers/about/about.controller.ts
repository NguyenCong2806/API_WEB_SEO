import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode, // <-- 1. Thêm HttpCode
  HttpStatus,
  Inject, // <-- 2. Thêm Inject
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { AboutDto } from 'src/models/viewmodel/about/aboutDto';
import { IAboutService } from 'src/services/about/IAboutService';

@Controller('about')
@UseGuards(JwtAuthGuard)
export class AboutController {
  constructor(
    @Inject(IAboutService)
    private readonly aboutService: IAboutService,
  ) { }

  @Get() // <-- 8. SỬA LẠI TÊN ROUTE
  async get(@Query() serachPara: SerachPara) {
    return this.aboutService.finds(serachPara);
  }

  @Get(':id') // <-- 8. SỬA LẠI TÊN ROUTE
  async find(@Param('id') id: string) {
    // 10. CHỈ CẦN RETURN
    return this.aboutService.findOne(id);
  }

  @Post() // <-- 8. SỬA LẠI TÊN ROUTE
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: AboutDto) {
    return this.aboutService.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: AboutDto,
  ) {
    return this.aboutService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.aboutService.remove(id);
  }
}