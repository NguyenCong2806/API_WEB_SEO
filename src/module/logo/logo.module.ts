import { LogoSchema } from './../../models/database/Logo';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LogoController } from 'src/controllers/logo/logo.controller';
import { LogoService } from 'src/services/logo/logo.service';
import { LogoRepository } from 'src/repository/logo/LogoRepository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Logo', schema: LogoSchema }])],
  controllers: [LogoController],
  providers: [
    LogoService,
    { provide: 'ILogoRepository', useClass: LogoRepository },
  ],
  exports: [LogoService],
})
export class LogoModule {}
