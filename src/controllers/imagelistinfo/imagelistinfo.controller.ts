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
import { ImageListInfo } from 'src/models/database/ImageListInfo';
import { ImageListInfoService } from 'src/services/imagelistinfo/imagelistinfo.service';
import { AuthGuard } from 'src/Guard/auth.guard';
@UseGuards(AuthGuard)
@Controller('imagelistinfo')
export class ImagelistinfoController {
  constructor(private readonly imagelistinfoService: ImageListInfoService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<ImageListInfo>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.imagelistinfoService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.imagelistinfoService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.imagelistinfoService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyimagelistinfo/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.imagelistinfoService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addimagelistinfo')
  async create(@Body() Imagelistinfodto: ImageListInfo, @Res() res: Response) {
    const respo = await this.imagelistinfoService.create(Imagelistinfodto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editimagelistinfo')
  async update(@Body() Imagelistinfodto: ImageListInfo, @Res() res: Response) {
    const respo = await this.imagelistinfoService.update(Imagelistinfodto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delimagelistinfo/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.imagelistinfoService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
