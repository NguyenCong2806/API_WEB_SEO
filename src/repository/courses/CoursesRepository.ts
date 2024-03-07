import { Courses } from './../../models/database/Courses';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { ICoursesRepository } from './ICoursesRepository';

@Injectable()
export class CoursesRepository
  extends BaseRepository<Courses>
  implements ICoursesRepository
{
  constructor(
    @InjectModel(Courses.name)
    private readonly courses_repository: Model<Courses>,
  ) {
    super(courses_repository);
  }
}
