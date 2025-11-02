import { Feedback } from './../../models/database/Feedback';

import { IBaseService } from '../IBaseService';

export interface IFeedbackService extends IBaseService<Feedback> {}
export const IFeedbackService = Symbol('IFeedbackService');
