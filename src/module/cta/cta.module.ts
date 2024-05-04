import { CtaRepository } from './../../repository/cta/Cta.repository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CtaSchema } from 'src/models/database/Cta';
import { CtaService } from 'src/services/Cta/Cta.service';
import { CtaController } from 'src/controllers/Cta/Cta.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cta', schema: CtaSchema }]),
    JwtModule,
  ],
  controllers: [CtaController],
  providers: [
    CtaService,
    { provide: 'ICtaRepository', useClass: CtaRepository },
  ],
  exports: [CtaService],
})
export class CtaModule {}
