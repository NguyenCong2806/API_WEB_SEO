import { ArticleHeader } from './../../models/database/ArticleHeader';
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
import { ArticleHeaderService } from 'src/services/articleheader/articleheader.service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@Controller('articleheader')
@UseGuards(AuthGuard)
export class ArticleHeaderController {
  constructor(private readonly articleheaderService: ArticleHeaderService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<ArticleHeader>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.articleheaderService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.articleheaderService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    //const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite];
    const respo = await this.articleheaderService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyarticleheader/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.articleheaderService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addarticleheader')
  async create(@Body() articleheaderdto: ArticleHeader, @Res() res: Response) {
    const respo = await this.articleheaderService.create(articleheaderdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editarticleheader')
  async update(@Body() articleheaderdto: ArticleHeader, @Res() res: Response) {
    const respo = await this.articleheaderService.update(articleheaderdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delarticleheader/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.articleheaderService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
