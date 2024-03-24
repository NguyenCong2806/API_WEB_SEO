import { BoxImageText } from './../../models/database/BoxImageText';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import Paginations from 'src/models/BaseModel/Paginations';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { BoximagetextService } from 'src/services/boximagetext/boximagetext.service';

@Controller('boximagetext')
export class BoxImageTextController {
  constructor(private readonly BoxImageTextService: BoximagetextService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<BoxImageText>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.BoxImageTextService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.BoxImageTextService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyboximagetext/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.BoxImageTextService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addboximagetext')
  async create(@Body() BoxImageTextdto: BoxImageText, @Res() res: Response) {
    const respo = await this.BoxImageTextService.create(BoxImageTextdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editboximagetext')
  async update(@Body() BoxImageTextdto: BoxImageText, @Res() res: Response) {
    const respo = await this.BoxImageTextService.update(BoxImageTextdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delboximagetext/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.BoxImageTextService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
