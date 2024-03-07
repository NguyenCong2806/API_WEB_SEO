import { Courses } from './../../models/database/Courses';
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { ICoursesService } from './ICoursesService';
import { ICoursesRepository } from 'src/repository/courses/ICoursesRepository';

@Injectable()
export class CoursesService
  extends BaseService<Courses>
  implements ICoursesService
{
  constructor(
    @Inject('ICoursesRepository')
    private readonly courses_repository: ICoursesRepository,
  ) {
    super(courses_repository);
  }
}
