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
import { Expert } from 'src/models/database/Expert';
import { ExpertService } from 'src/services/expert/expert.service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('expert')
export class ExpertController {
  constructor(private readonly expertService: ExpertService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Expert>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.expertService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.expertService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.expertService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyexpert/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.expertService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addexpert')
  async create(@Body() Expertdto: Expert, @Res() res: Response) {
    const respo = await this.expertService.create(Expertdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editexpert')
  async update(@Body() Expertdto: Expert, @Res() res: Response) {
    const respo = await this.expertService.update(Expertdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delexpert/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.expertService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
