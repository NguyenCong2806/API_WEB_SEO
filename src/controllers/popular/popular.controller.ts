import { Popular } from './../../models/database/Popular';
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
import { PopularService } from 'src/services/popular/popular.service';

@Controller('popular')
export class PopularController {
  constructor(private readonly popularService: PopularService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Popular>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.popularService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.popularService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbypopular/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.popularService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addpopular')
  async create(@Body() Populardto: Popular, @Res() res: Response) {
    const respo = await this.popularService.create(Populardto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editpopular')
  async update(@Body() Populardto: Popular, @Res() res: Response) {
    const respo = await this.popularService.update(Populardto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delpopular/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.popularService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
