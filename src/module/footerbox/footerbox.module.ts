import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FooterBoxController } from 'src/controllers/footerbox/footerbox.controller';
import { FooterBoxSchema } from 'src/models/database/FooterBox';
import { FooterBoxRepository } from 'src/repository/footerbox/FooterBoxRepository';
import { FooterBoxService } from 'src/services/footerbox/footerbox.service';
import { IFooterBoxService } from 'src/services/footerbox/Ifooterbox.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FooterBox', schema: FooterBoxSchema }]),
  ],
  controllers: [FooterBoxController],
  providers: [
    {
      provide: IFooterBoxService, // <-- Token (Giá trị)
      useClass: FooterBoxService,  // <-- Class (Thực thi)
    },
    { provide: 'IfooterboxRepository', useClass: FooterBoxRepository },
  ],
  exports: [IFooterBoxService],
})
export class FooterBoxModule {}
