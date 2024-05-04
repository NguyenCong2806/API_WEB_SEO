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
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import Paginations from 'src/models/BaseModel/Paginations';
import SerachPara from 'src/models/BaseModel/SerachPara';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { ContentService } from 'src/services/content/content.service';
import { AuthGuard } from 'src/Guard/auth.guard';
@UseGuards(AuthGuard)
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
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.contentService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getlink/:link')
  async findlink(@Param('link') link: string, @Res() res: Response) {
    const _datalink = { link: { $regex: link } } as any;
    const _datas = [_datalink];
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
