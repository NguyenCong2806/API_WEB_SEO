import { Roles } from './../decorator/roles.decorator';
import { Controller, UseGuards } from '@nestjs/common';
import { AppService } from '../services/app/app.service';
import { AuthGuard } from 'src/Guard/auth.guard';

@Controller()
@UseGuards(AuthGuard)
@Roles('admin', 'member')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
