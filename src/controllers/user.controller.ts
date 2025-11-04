import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../models/viewmodel/user/CreateUserDto';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { IUserService } from 'src/services/user/IUserService';
import { RolesGuard } from 'src/Guard/role.guard';
import { UpdateUserDto } from 'src/models/viewmodel/user/UpdateUserDto';
import { AuthMetaData } from 'src/decorator/auth.decorator';

@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin', 'member')
export class UsersController {
  constructor(
    @Inject(IUserService)
    private readonly usersService: IUserService,
  ) {} 

  @Get()
  async get(@Query() serachPara: SerachPara) {
    return this.usersService.finds(serachPara);
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  
  @AuthMetaData('skipAuthCheck')
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) { // (Đã sửa tên DTO)
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateUserDto, 
  ) {
    return this.usersService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}