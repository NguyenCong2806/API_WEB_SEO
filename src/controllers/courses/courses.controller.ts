import { Courses } from './../../models/database/Courses';
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
import { CoursesService } from 'src/services/Courses/Courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly CoursesService: CoursesService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Courses>();

    pagination.perPage = serachPara.pageindex;
    pagination.page = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.CoursesService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycourses/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.CoursesService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcourses')
  async create(@Body() Coursesdto: Courses, @Res() res: Response) {
    const respo = await this.CoursesService.create(Coursesdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcourses')
  async update(@Body() Coursesdto: Courses, @Res() res: Response) {
    const respo = await this.CoursesService.update(Coursesdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcourses/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.CoursesService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
