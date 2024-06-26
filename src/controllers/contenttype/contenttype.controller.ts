//import { AuthGuard } from './../../Guard/auth.guard';
import { Contenttype } from './../../models/database/Contenttype';
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
import { ContenttypeService } from 'src/services/contenttype/contenttype.service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('contenttype')
export class ContenttypeController {
  constructor(private readonly contenttypeService: ContenttypeService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Contenttype>();
    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    pagination.keyword = serachPara.keyword;
    if (serachPara.keyword != null) {
      pagination.condition = {
        title: { $regex: '.*' + serachPara.keyword + '.*' },
      };
    }
    const respo = await this.contenttypeService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: { $regex: parainfo.location } } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.contenttypeService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.contenttypeService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycontenttype/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.contenttypeService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcontenttype')
  async create(@Body() contenttypedto: Contenttype, @Res() res: Response) {
    const respo = await this.contenttypeService.create(contenttypedto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcontenttype')
  async update(@Body() contenttypedto: Contenttype, @Res() res: Response) {
    const respo = await this.contenttypeService.update(contenttypedto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcontenttype/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.contenttypeService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
