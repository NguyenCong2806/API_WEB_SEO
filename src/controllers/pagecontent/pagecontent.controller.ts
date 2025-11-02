import { PageContent } from './../../models/database/PageContent';
import { PageContentService } from './../../services/pagecontent/Pagecontent.serice';
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
import { AuthGuard } from 'src/Guard/jwt-auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('pagecontent')
export class PageContentController {
  constructor(private readonly pagecontentService: PageContentService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<PageContent>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.pagecontentService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.pagecontentService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.pagecontentService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbypagecontent/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.pagecontentService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addpagecontent')
  async create(@Body() dto: PageContent, @Res() res: Response) {
    const respo = await this.pagecontentService.create(dto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editpagecontent')
  async update(@Body() dto: PageContent, @Res() res: Response) {
    const respo = await this.pagecontentService.update(dto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delpagecontent/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.pagecontentService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
