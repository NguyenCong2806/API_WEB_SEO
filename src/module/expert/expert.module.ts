import { ExpertRepository } from './../../repository/expert/ExpertRepository';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpertController } from 'src/controllers/expert/expert.controller';
import { ExpertSchema } from 'src/models/database/Expert';
import { ExpertService } from 'src/services/expert/expert.service';
import { IExpertService } from 'src/services/expert/IExpertService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Expert', schema: ExpertSchema }]),
  ],
  controllers: [ExpertController],
  providers: [
    {
      provide: IExpertService, // <-- Token (Giá trị)
      useClass: ExpertService, // <-- Class (Thực thi)
    },
    { provide: 'IExpertRepository', useClass: ExpertRepository },
  ],
  exports: [IExpertService],
})
export class ExpertModule {}
