import { Cta } from './../../models/database/Cta';
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
import { CtaService } from 'src/services/Cta/Cta.service';
@Controller('cta')
export class CtaController {
  constructor(private readonly ctaService: CtaService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Cta>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.ctaService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.ctaService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycta/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.ctaService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcta')
  async create(@Body() ctadto: Cta, @Res() res: Response) {
    const respo = await this.ctaService.create(ctadto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcta')
  async update(@Body() ctadto: Cta, @Res() res: Response) {
    const respo = await this.ctaService.update(ctadto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcta/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.ctaService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
