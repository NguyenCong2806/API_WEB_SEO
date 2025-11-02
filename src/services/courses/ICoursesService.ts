import { Courses } from './../../models/database/Courses';
import { IBaseService } from '../IBaseService';

export interface ICoursesService extends IBaseService<Courses> {}
export const ICoursesService = Symbol('ICoursesService');
