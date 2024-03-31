import { Content } from './../../models/database/Content';

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
import { ContentService } from 'src/services/content/content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Content>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.contentService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: { $regex: parainfo.location } } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.contentService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycontent/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.contentService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcontent')
  async create(@Body() contentdto: Content, @Res() res: Response) {
    const respo = await this.contentService.create(contentdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcontent')
  async update(@Body() contentdto: Content, @Res() res: Response) {
    const respo = await this.contentService.update(contentdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcontent/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.contentService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
