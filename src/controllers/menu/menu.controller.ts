import { ModalPopup } from './../../models/database/ModalPopup';
import { ModalPopupService } from './../../services/modalpopup/modalpopup.service';
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
import { Menu } from 'src/models/database/Menu';
import { MenuService } from 'src/services/menu/menu.service';

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
  @Get('getbymenu/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.menuService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addmenu')
  async create(@Body() dto: ModalPopup, @Res() res: Response) {
    const respo = await this.menuService.create(dto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editmenu')
  async update(@Body() dto: ModalPopup, @Res() res: Response) {
    const respo = await this.menuService.update(dto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delmenu/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.menuService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
