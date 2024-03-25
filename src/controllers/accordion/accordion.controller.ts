import { Accordion } from './../../models/database/Accordion';
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
import { AccordionService } from 'src/services/accordion/accordion.service';

@Controller('accordion')
export class AccordionController {
  constructor(private readonly accordionService: AccordionService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Accordion>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.accordionService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.accordionService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyaccordion/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.accordionService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addaccordion')
  async create(@Body() Accordiondto: Accordion, @Res() res: Response) {
    const respo = await this.accordionService.create(Accordiondto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editAacordion')
  async update(@Body() Accordiondto: Accordion, @Res() res: Response) {
    const respo = await this.accordionService.update(Accordiondto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delaccordion/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.accordionService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
