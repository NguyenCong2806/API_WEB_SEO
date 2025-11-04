import { AboutRepository } from './../../repository/about/AboutRepository';
import { AboutService } from './../../services/about/about.service';
import { AboutSchema } from './../../models/database/About';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutController } from 'src/controllers/about/about.controller';
import { IAboutService } from 'src/services/about/IAboutService'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'About', schema: AboutSchema }]),
  ],
  controllers: [AboutController],
  providers: [
    {
      provide: IAboutService, 
      useClass: AboutService,
    },
    { provide: 'IAboutRepository', useClass: AboutRepository },
  ],
  exports: [IAboutService], 
})
export class AboutModule {}