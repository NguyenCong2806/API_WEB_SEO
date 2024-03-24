import { Feedback } from './../../models/database/Feedback';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { IFeedbackRepository } from './IFeedbackRepository';

@Injectable()
export class FeedbackRepository
  extends BaseRepository<Feedback>
  implements IFeedbackRepository
{
  constructor(
    @InjectModel(Feedback.name)
    private readonly feedback_repository: Model<Feedback>,
  ) {
    super(feedback_repository);
  }
}
