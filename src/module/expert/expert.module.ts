import { ExpertRepository } from './../../repository/expert/ExpertRepository';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpertController } from 'src/controllers/expert/expert.controller';
import { ExpertSchema } from 'src/models/database/Expert';
import { ExpertService } from 'src/services/expert/expert.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Expert', schema: ExpertSchema }]),
    JwtModule,
  ],
  controllers: [ExpertController],
  providers: [
    ExpertService,
    { provide: 'IExpertRepository', useClass: ExpertRepository },
  ],
  exports: [ExpertService],
})
export class ExpertModule {}
