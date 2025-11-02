import { ModalpopupRepository } from './../../repository/modalpopup/ModalpopupRepository';
import { ModalPopupService } from './../../services/modalpopup/modalpopup.service';
import { ModalPopupController } from './../../controllers/modalpopup/modalpopup.controller';
import { ModalPopupSchema } from './../../models/database/ModalPopup';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { IModalPopupservice } from 'src/services/modalpopup/IModalPopupservice';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ModalPopup', schema: ModalPopupSchema },
    ]),
  ],
  controllers: [ModalPopupController],
  providers: [
    {
      provide: IModalPopupservice, // <-- Token (Giá trị)
      useClass: ModalPopupService, // <-- Class (Thực thi)
    },
    { provide: 'IModalpopupRepository', useClass: ModalpopupRepository },
  ],
  exports: [IModalPopupservice],
})
export class ModalPopupModule {}
