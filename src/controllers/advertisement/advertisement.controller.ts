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
import { Advertisement } from 'src/models/database/Advertisement';
import { AdvertisementService } from 'src/services/advertisement/Advertisement.Service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@Controller('advertisement')
@UseGuards(AuthGuard)
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Advertisement>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.advertisementService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.advertisementService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.advertisementService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyadvertisement/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.advertisementService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addadvertisement')
  async create(@Body() advertisementdto: Advertisement, @Res() res: Response) {
    const respo = await this.advertisementService.create(advertisementdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editadvertisement')
  async update(@Body() advertisementdto: Advertisement, @Res() res: Response) {
    const respo = await this.advertisementService.update(advertisementdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('deladvertisement/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.advertisementService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
