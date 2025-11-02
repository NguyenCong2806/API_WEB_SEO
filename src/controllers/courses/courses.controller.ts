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
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import Paginations from 'src/models/BaseModel/Paginations';
import SerachPara from 'src/models/BaseModel/SerachPara';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { CoursesService } from 'src/services/Courses/Courses.service';
import { AuthGuard } from 'src/Guard/jwt-auth.guard';
import { AuthMetaData } from 'src/decorator/auth.decorator';
@UseGuards(AuthGuard)
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Courses>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.coursesService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.coursesService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.coursesService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycourses/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.coursesService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcourses')
  async create(@Body() Coursesdto: Courses, @Res() res: Response) {
    const respo = await this.coursesService.create(Coursesdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcourses')
  async update(@Body() Coursesdto: Courses, @Res() res: Response) {
    const respo = await this.coursesService.update(Coursesdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcourses/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.coursesService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
