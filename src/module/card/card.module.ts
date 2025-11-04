import { CardService } from './../../services/card/card.service';
import { CardRepository } from './../../repository/card/CardRepository';
import { CardSchema } from './../../models/database/Card';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardController } from 'src/controllers/card/card.controller';
import { ICardService } from 'src/services/card/ICardService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }]),

  ],

  controllers: [CardController],
  providers: [
    {
      provide: ICardService, // <-- Token (Giá trị)
      useClass: CardService,  // <-- Class (Thực thi)
    },
    { provide: 'ICardRepository', useClass: CardRepository },
  ],
  exports: [ICardService],
})
export class CardModule { }
