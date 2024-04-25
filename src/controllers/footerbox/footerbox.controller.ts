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
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { FooterBox } from 'src/models/database/FooterBox';
import { FooterBoxService } from 'src/services/footerbox/footerbox.service';

@Controller('footerbox')
export class FooterBoxController {
  constructor(private readonly footerboxService: FooterBoxService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<FooterBox>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.footerboxService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.footerboxService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    //const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite];
    const respo = await this.footerboxService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyfooterbox/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.footerboxService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addfooterbox')
  async create(@Body() footerboxdto: FooterBox, @Res() res: Response) {
    const respo = await this.footerboxService.create(footerboxdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editfooterbox')
  async update(@Body() footerboxdto: FooterBox, @Res() res: Response) {
    const respo = await this.footerboxService.update(footerboxdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delfooterbox/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.footerboxService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
