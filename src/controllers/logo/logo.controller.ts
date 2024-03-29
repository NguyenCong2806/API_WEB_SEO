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
import { Logo } from 'src/models/database/Logo';
import { LogoService } from 'src/services/logo/logo.service';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Logo>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.logoService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyLogo/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.logoService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addLogo')
  async create(@Body() Logodto: Logo, @Res() res: Response) {
    const respo = await this.logoService.create(Logodto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editLogo')
  async update(@Body() Logodto: Logo, @Res() res: Response) {
    const respo = await this.logoService.update(Logodto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delLogo/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.logoService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
