import { IContactService } from './../../services/Contact/IContactService';
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
  } from '@nestjs/common';
  import { Response } from 'express';
  import Paginations from 'src/models/BaseModel/Paginations';
  import SerachPara from 'src/models/BaseModel/SerachPara';
import { ContactService } from 'src/services/Contact/Contact.service';
  
  @Controller('contact')
  export class ContactController {
    constructor(private readonly ContactService: ContactService) {}
  
    @Get('getall')
    async get(@Query() serachPara: SerachPara, @Res() res: Response) {
      const pagination = new Paginations<Contact>();
  
      pagination.perPage = serachPara.pageindex;
      pagination.page = serachPara.pagesize;
      if (serachPara.keyword != null) {
        pagination.condition = { username: { $regex: serachPara.keyword } };
      }
      const respo = await this.ContactService.finds(pagination);
      res.status(HttpStatus.OK).json(respo);
    }
    @Get('getbycontact/:id')
    async find(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.ContactService.findOne(id);
      res.status(HttpStatus.OK).json(respo);
    }
    @Post('addcontact')
    async create(@Body() Contactdto: Contact, @Res() res: Response) {
      const respo = await this.ContactService.create(Contactdto);
      res.status(HttpStatus.CREATED).json(respo);
    }
    @Put('editcontact')
    async update(@Body() Contactdto: Contact, @Res() res: Response) {
      const respo = await this.ContactService.update(Contactdto);
      res.status(HttpStatus.OK).json(respo);
    }
    
    @Delete('delcontact/:id')
    async delete(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.ContactService.remove(id);
      res.status(HttpStatus.OK).json(respo);
    }
  }
  