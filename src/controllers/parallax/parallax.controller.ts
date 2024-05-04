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
import { Parallax } from 'src/models/database/Parallax';
import { ParallaxService } from 'src/services/parallax/Parallax.service';
import { AuthGuard } from 'src/Guard/auth.guard';
@UseGuards(AuthGuard)
@Controller('parallax')
export class ParallaxController {
  constructor(private readonly parallaxService: ParallaxService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Parallax>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.parallaxService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.parallaxService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.parallaxService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyparallax/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.parallaxService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addparallax')
  async create(@Body() dto: Parallax, @Res() res: Response) {
    const respo = await this.parallaxService.create(dto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editparallax')
  async update(@Body() dto: Parallax, @Res() res: Response) {
    const respo = await this.parallaxService.update(dto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delparallax/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.parallaxService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
