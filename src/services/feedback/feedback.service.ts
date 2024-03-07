import { IFeedbackRepository } from './../../repository/feedback/IFeedbackRepository';
import { Feedback } from './../../models/database/Feedback';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { IFeedbackService } from './IFeedbackService';

@Injectable()
export class FeedbackService
  extends BaseService<Feedback>
  implements IFeedbackService
{
  constructor(
    @Inject('IFeedbackRepository')
    private readonly feedback_repository: IFeedbackRepository,
  ) {
    super(feedback_repository);
  }
}
