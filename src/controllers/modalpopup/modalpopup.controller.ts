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

@Controller('modalpopup')
export class ModalPopupController {
  constructor(private readonly modalpopupService: ModalPopupService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<ModalPopup>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.modalpopupService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.modalpopupService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbymodalpopup/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.modalpopupService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addmodalpopup')
  async create(@Body() dto: ModalPopup, @Res() res: Response) {
    const respo = await this.modalpopupService.create(dto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editmodalpopup')
  async update(@Body() dto: ModalPopup, @Res() res: Response) {
    const respo = await this.modalpopupService.update(dto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delmodalpopup/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.modalpopupService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
