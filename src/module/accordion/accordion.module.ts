import { AccordionRespository } from './../../repository/accordion/AccordionRepository';
import { AccordionService } from './../../services/accordion/accordion.service';
import { AccordionController } from './../../controllers/accordion/accordion.controller';
import { AccordionSchema } from './../../models/database/Accordion';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Accordion', schema: AccordionSchema }]),
    JwtModule,
  ],
  controllers: [AccordionController],
  providers: [
    AccordionService,
    {
      provide: 'IAccordionRespository',
      useClass: AccordionRespository,
    },
  ],
  exports: [AccordionService],
})
export class AccordionModule {}
