import { Content } from './../../models/database/Content';

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
  import { ContentService } from 'src/services/content/content.service';

  @Controller('content')
  export class ContentController {
    constructor(private readonly ContentService: ContentService) {}
  
    @Get('getall')
    async get(@Query() serachPara: SerachPara, @Res() res: Response) {
      const pagination = new Paginations<Content>();
  
      pagination.pageindex = serachPara.pageindex;
      pagination.pagesize = serachPara.pagesize;
      if (serachPara.keyword != null) {
        pagination.condition = { username: { $regex: serachPara.keyword } };
      }
      const respo = await this.ContentService.finds(pagination);
      res.status(HttpStatus.OK).json(respo);
    }
    @Get('getbycontent/:id')
    async find(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.ContentService.findOne(id);
      res.status(HttpStatus.OK).json(respo);
    }
    @Post('addcontent')
    async create(@Body() contentdto: Content, @Res() res: Response) {
      const respo = await this.ContentService.create(contentdto);
      res.status(HttpStatus.CREATED).json(respo);
    }
    @Put('editcontent')
    async update(@Body() contentdto: Content, @Res() res: Response) {
      const respo = await this.ContentService.update(contentdto);
      res.status(HttpStatus.OK).json(respo);
    }
    
    @Delete('delcontent/:id')
    async delete(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.ContentService.remove(id);
      res.status(HttpStatus.OK).json(respo);
    }
  }
  