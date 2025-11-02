import { CtaRepository } from './../../repository/cta/Cta.repository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CtaSchema } from 'src/models/database/Cta';
import { CtaService } from 'src/services/Cta/Cta.service';
import { CtaController } from 'src/controllers/Cta/Cta.controller';
import { ICtaService } from 'src/services/Cta/ICtaService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cta', schema: CtaSchema }]),
  ],
  controllers: [CtaController],
  providers: [
    {
      provide: ICtaService, // <-- Token (Giá trị)
      useClass: CtaService,  // <-- Class (Thực thi)
    },
    { provide: 'ICtaRepository', useClass: CtaRepository },
  ],
  exports: [ICtaService],
})
export class CtaModule {}
