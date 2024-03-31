import { CardNumbers } from './../../models/database/CardNumbers';
import { CardNumbersService } from './../../services/cardnumbers/cardnumbers.service';
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

@Controller('cardnumbers')
export class CardNumbersController {
  constructor(private readonly cardnumbersService: CardNumbersService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<CardNumbers>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.cardnumbersService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: { $regex: parainfo.location } } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.cardnumbersService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.cardnumbersService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycardnumbers/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardnumbersService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcardnumbers')
  async create(@Body() cardnumbersdto: CardNumbers, @Res() res: Response) {
    const respo = await this.cardnumbersService.create(cardnumbersdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcardnumbers')
  async update(@Body() cardnumbersdto: CardNumbers, @Res() res: Response) {
    const respo = await this.cardnumbersService.update(cardnumbersdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcardnumbers/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardnumbersService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
