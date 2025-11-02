import { FeedbackRepository } from './../../repository/feedback/FeedbackRepository';
import { FeedbackService } from './../../services/feedback/feedback.service';
import { FeedbackController } from './../../controllers/feedback/feedback.controller';
import { FeedbackSchema } from './../../models/database/Feedback';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IFeedbackService } from 'src/services/feedback/IFeedbackService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feedback', schema: FeedbackSchema }]),
  ],
  controllers: [FeedbackController],
  providers: [
    {
      provide: IFeedbackService, // <-- Token (Giá trị)
      useClass: FeedbackService,  // <-- Class (Thực thi)
    },
    { provide: 'IFeedbackRepository', useClass: FeedbackRepository },
  ],
  exports: [IFeedbackService],
})
export class FeedbackModule { }
