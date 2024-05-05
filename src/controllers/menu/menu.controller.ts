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
import { Menu } from 'src/models/database/Menu';
import { MenuService } from 'src/services/menu/menu.service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Menu>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.menuService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.menuService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.menuService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbymenu/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.menuService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addmenu')
  async create(@Body() dto: Menu, @Res() res: Response) {
    const respo = await this.menuService.create(dto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editmenu')
  async update(@Body() dto: Menu, @Res() res: Response) {
    const respo = await this.menuService.update(dto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delmenu/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.menuService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
