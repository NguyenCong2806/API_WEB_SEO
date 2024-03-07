import { Popular } from './../../models/database/Popular';
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
  import { PopularService } from 'src/services/popular/popular.service';
  
  @Controller('popular')
  export class PopularController {
    constructor(private readonly PopularService: PopularService) {}
  
    @Get('getall')
    async get(@Query() serachPara: SerachPara, @Res() res: Response) {
      const pagination = new Paginations<Popular>();
  
      pagination.perPage = serachPara.pageindex;
      pagination.page = serachPara.pagesize;
      if (serachPara.keyword != null) {
        pagination.condition = { username: { $regex: serachPara.keyword } };
      }
      const respo = await this.PopularService.finds(pagination);
      res.status(HttpStatus.OK).json(respo);
    }
    @Get('getbypopular/:id')
    async find(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.PopularService.findOne(id);
      res.status(HttpStatus.OK).json(respo);
    }
    @Post('addpopular')
    async create(@Body() Populardto: Popular, @Res() res: Response) {
      const respo = await this.PopularService.create(Populardto);
      res.status(HttpStatus.CREATED).json(respo);
    }
    @Put('editpopular')
    async update(@Body() Populardto: Popular, @Res() res: Response) {
      const respo = await this.PopularService.update(Populardto);
      res.status(HttpStatus.OK).json(respo);
    }
  
    @Delete('delpopular/:id')
    async delete(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.PopularService.remove(id);
      res.status(HttpStatus.OK).json(respo);
    }
  }
  