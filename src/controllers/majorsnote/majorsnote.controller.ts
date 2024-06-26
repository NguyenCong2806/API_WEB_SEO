import { MajorsNote } from './../../models/database/MajorsNote';

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
import { MajorsNoteService } from 'src/services/majorsnote/majorsnote.service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('majorsnote')
export class MajorsNoteController {
  constructor(private readonly majorsnoteService: MajorsNoteService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<MajorsNote>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.majorsnoteService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.majorsnoteService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.majorsnoteService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbymajorsnote/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.majorsnoteService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addmajorsnote')
  async create(@Body() dto: MajorsNote, @Res() res: Response) {
    const respo = await this.majorsnoteService.create(dto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editmajorsnote')
  async update(@Body() dto: MajorsNote, @Res() res: Response) {
    const respo = await this.majorsnoteService.update(dto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delmajorsnote/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.majorsnoteService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
