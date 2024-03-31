import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import Paginations from 'src/models/BaseModel/Paginations';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { Media } from 'src/models/database/Media';
import { MediaService } from 'src/services/media/media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    console.log(serachPara);
    const pagination = new Paginations<Media>();
    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.mediaService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbymedia/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.mediaService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addmedia')
  async create(@Body() mediadto: Media, @Res() res: Response) {
    const respo = await this.mediaService.create(mediadto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Delete('delmedia/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.mediaService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
