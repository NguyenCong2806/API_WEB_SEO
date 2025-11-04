import { Roles } from './../decorator/roles.decorator';
import { Controller, UseGuards } from '@nestjs/common';
import { AppService } from '../services/app/app.service';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard';
import { RolesGuard } from 'src/Guard/role.guard';


@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin', 'member')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
