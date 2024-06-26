import { CardService } from './../../services/card/card.service';
import { CardRepository } from './../../repository/card/CardRepository';
import { CardSchema } from './../../models/database/Card';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardController } from 'src/controllers/card/card.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }]),
    JwtModule,
  ],

  controllers: [CardController],
  providers: [
    CardService,
    { provide: 'ICardRepository', useClass: CardRepository },
  ],
  exports: [CardService],
})
export class CardModule {}
