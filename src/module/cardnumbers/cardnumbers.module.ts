import { CardNumbersSchema } from './../../models/database/CardNumbers';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardNumbersController } from 'src/controllers/cardnumbers/cardnumbers.controller';
import { CardNumbersService } from 'src/services/cardnumbers/cardnumbers.service';
import { CardNumbersRepository } from 'src/repository/cardnumbers/CardNumbersRepository';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CardNumbers', schema: CardNumbersSchema },
    ]),
    JwtModule,
  ],
  controllers: [CardNumbersController],
  providers: [
    CardNumbersService,
    { provide: 'ICardNumbersRepository', useClass: CardNumbersRepository },
  ],
  exports: [CardNumbersService],
})
export class CardNumbersModule {}
