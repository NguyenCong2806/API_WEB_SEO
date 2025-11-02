import { Tabs } from './../../models/database/Tabs';
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
import { TabsService } from 'src/services/tabs/tabs.service';
import { AuthGuard } from 'src/Guard/jwt-auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Tabs>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.tabsService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.tabsService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.tabsService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbytabs/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.tabsService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addtabs')
  async create(@Body() Tabsdto: Tabs, @Res() res: Response) {
    const respo = await this.tabsService.create(Tabsdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('edittabs')
  async update(@Body() Tabsdto: Tabs, @Res() res: Response) {
    const respo = await this.tabsService.update(Tabsdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('deltabs/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.tabsService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
