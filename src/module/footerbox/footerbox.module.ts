import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FooterBoxController } from 'src/controllers/footerbox/footerbox.controller';
import { FooterBoxSchema } from 'src/models/database/FooterBox';
import { FooterBoxRepository } from 'src/repository/footerbox/FooterBoxRepository';
import { FooterBoxService } from 'src/services/footerbox/footerbox.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FooterBox', schema: FooterBoxSchema }]),
  ],
  controllers: [FooterBoxController],
  providers: [
    FooterBoxService,
    { provide: 'IfooterboxRepository', useClass: FooterBoxRepository },
  ],
  exports: [FooterBoxService],
})
export class FooterBoxModule {}
