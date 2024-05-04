import { FeedbackRepository } from './../../repository/feedback/FeedbackRepository';
import { FeedbackService } from './../../services/feedback/feedback.service';
import { FeedbackController } from './../../controllers/feedback/feedback.controller';
import { FeedbackSchema } from './../../models/database/Feedback';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feedback', schema: FeedbackSchema }]),
    JwtModule,
  ],
  controllers: [FeedbackController],
  providers: [
    FeedbackService,
    { provide: 'IFeedbackRepository', useClass: FeedbackRepository },
  ],
  exports: [FeedbackService],
})
export class FeedbackModule {}
