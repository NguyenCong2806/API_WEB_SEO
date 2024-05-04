import { ModalpopupRepository } from './../../repository/modalpopup/ModalpopupRepository';
import { ModalPopupService } from './../../services/modalpopup/modalpopup.service';
import { ModalPopupController } from './../../controllers/modalpopup/modalpopup.controller';
import { ModalPopupSchema } from './../../models/database/ModalPopup';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ModalPopup', schema: ModalPopupSchema },
    ]),
    JwtModule,
  ],
  controllers: [ModalPopupController],
  providers: [
    ModalPopupService,
    { provide: 'IModalpopupRepository', useClass: ModalpopupRepository },
  ],
  exports: [ModalPopupService],
})
export class ModalPopupModule {}
