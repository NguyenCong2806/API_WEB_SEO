import { ICarouselService } from './../../services/carousel/ICarouselService';
import { Carousel } from './../../models/database/Carousel';
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
import { CarouselService } from 'src/services/carousel/carousel.service';
  
  @Controller('carousel')
  export class CarouselController {
    constructor(private readonly carouselService: CarouselService) {}
  
    @Get('getall')
    async get(@Query() serachPara: SerachPara, @Res() res: Response) {
      const pagination = new Paginations<Carousel>();
  
      pagination.pageindex = serachPara.pageindex;
      pagination.pagesize = serachPara.pagesize;
      if (serachPara.keyword != null) {
        pagination.condition = { username: { $regex: serachPara.keyword } };
      }
      const respo = await this.carouselService.finds(pagination);
      res.status(HttpStatus.OK).json(respo);
    }
    @Get('getbycarousel/:id')
    async find(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.carouselService.findOne(id);
      res.status(HttpStatus.OK).json(respo);
    }
    @Post('addcarousel')
    async create(@Body() carouseldto: Carousel, @Res() res: Response) {
      const respo = await this.carouselService.create(carouseldto);
      res.status(HttpStatus.CREATED).json(respo);
    }
    @Put('editcarousel')
    async update(@Body() carouseldto: Carousel, @Res() res: Response) {
      const respo = await this.carouselService.update(carouseldto);
      res.status(HttpStatus.OK).json(respo);
    }
    
    @Delete('delcarousel/:id')
    async delete(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.carouselService.remove(id);
      res.status(HttpStatus.OK).json(respo);
    }
  }
  