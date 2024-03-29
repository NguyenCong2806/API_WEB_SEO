import { Card } from './../../models/database/Card';
import { CardService } from './../../services/card/card.service';
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

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Card>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.cardService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.cardService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycard/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcard')
  async create(@Body() carddto: Card, @Res() res: Response) {
    const respo = await this.cardService.create(carddto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcard')
  async update(@Body() carddto: Card, @Res() res: Response) {
    const respo = await this.cardService.update(carddto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcard/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
