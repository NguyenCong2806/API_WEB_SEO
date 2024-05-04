import { AboutRepository } from './../../repository/about/AboutRepository';
import { AboutService } from './../../services/about/about.service';
import { AboutSchema } from './../../models/database/About';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutController } from 'src/controllers/about/about.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'About', schema: AboutSchema }]),
    JwtModule,
  ],
  controllers: [AboutController],
  providers: [
    AboutService,
    { provide: 'IAboutRepository', useClass: AboutRepository },
  ],
  exports: [AboutService],
})
export class AboutModule {}
