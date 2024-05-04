import { Contact } from './../../models/database/Contact';
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
import { ContactService } from 'src/services/Contact/Contact.service';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { AuthGuard } from 'src/Guard/auth.guard';
@UseGuards(AuthGuard)
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Contact>();
    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.contactService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.contactService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.contactService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycontact/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.contactService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcontact')
  async create(@Body() Contactdto: Contact, @Res() res: Response) {
    const respo = await this.contactService.create(Contactdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcontact')
  async update(@Body() Contactdto: Contact, @Res() res: Response) {
    const respo = await this.contactService.update(Contactdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcontact/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.contactService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
