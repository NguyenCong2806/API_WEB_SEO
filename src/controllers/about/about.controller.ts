import { About } from './../../models/database/About';
import { AboutService } from './../../services/about/about.service';
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

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<About>();

    pagination.perPage = serachPara.pageindex;
    pagination.page = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.aboutService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyabout/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.aboutService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addabout')
  async create(@Body() aboutdto: About, @Res() res: Response) {
    const respo = await this.aboutService.create(aboutdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editabout')
  async update(@Body() aboutdto: About, @Res() res: Response) {
    const respo = await this.aboutService.update(aboutdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delabout/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.aboutService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
