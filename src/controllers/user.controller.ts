/* eslint-disable @typescript-eslint/no-unused-vars */
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
  // UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from './../models/database/User';
import { UserService } from 'src/services/user/user.service';
import Paginations from 'src/models/BaseModel/Paginations';
import { UpdateTodoDto } from '../models/viewmodel/user/UpdateUserDto';
import { CreateTodoDto } from '../models/viewmodel/user/CreateUserDto';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { AuthGuard } from 'src/Guard/auth.guard';
import { Roles } from 'src/decorator/roles.decorator';
import * as argon2 from 'argon2';
import { IUserService } from 'src/services/user/IUserService';

@Controller('user')
@UseGuards(AuthGuard)
@Roles('admin', 'member')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<User>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.usersService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyuse/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.usersService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('adduser')
  async create(@Body() createUserDto: CreateTodoDto, @Res() res: Response) {
    createUserDto.password = await argon2.hash(createUserDto.password);
    const respo = await this.usersService.create(createUserDto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('edituser')
  async update(@Body() updateTodoDto: UpdateTodoDto, @Res() res: Response) {
    const respo = await this.usersService.update(updateTodoDto);
    res.status(HttpStatus.OK).json(respo);
  }
  @Put('changpassword/:id')
  async changpassword(
    @Body() updateTodoDto: UpdateTodoDto,
    @Res() res: Response,
  ) {
    updateTodoDto.password = await argon2.hash(updateTodoDto.password);
    const respo = await this.usersService.update(updateTodoDto);
    res.status(HttpStatus.OK).json(respo);
  }
  @Delete('deluser/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.usersService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
