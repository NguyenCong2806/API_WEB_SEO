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
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { BoximagetextService } from 'src/services/boximagetext/boximagetext.service';

@Controller('boximagetext')
export class BoxImageTextController {
  constructor(private readonly boxImageTextService: BoximagetextService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<BoxImageText>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.boxImageTextService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.boxImageTextService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyboximagetext/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.boxImageTextService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addboximagetext')
  async create(@Body() BoxImageTextdto: BoxImageText, @Res() res: Response) {
    const respo = await this.boxImageTextService.create(BoxImageTextdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editboximagetext')
  async update(@Body() BoxImageTextdto: BoxImageText, @Res() res: Response) {
    const respo = await this.boxImageTextService.update(BoxImageTextdto);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    //const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite];
    const respo = await this.boxImageTextService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Delete('delboximagetext/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.boxImageTextService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
