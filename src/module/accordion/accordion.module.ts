import { AccordionRepository } from './../../repository/accordion/AccordionRepository';
import { AccordionService } from './../../services/accordion/accordion.service';
import { AccordionController } from './../../controllers/accordion/accordion.controller';
import { AccordionSchema } from './../../models/database/Accordion';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IAccordionService } from 'src/services/accordion/IAccordionService'; // <-- 2. IMPORT TOKEN

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Accordion', schema: AccordionSchema }]),
  ],
  controllers: [AccordionController],
  providers: [
    // 3. SỬA LẠI PROVIDER ĐỂ DÙNG TOKEN
    {
      provide: IAccordionService, // <-- Token (Giá trị)
      useClass: AccordionService,  // <-- Class (Thực thi)
    },
    {
      provide: 'IAccordionRespository',
      useClass: AccordionRepository,
    },
  ],
  // 4. EXPORT TOKEN
  exports: [IAccordionService],
})
export class AccordionModule { }