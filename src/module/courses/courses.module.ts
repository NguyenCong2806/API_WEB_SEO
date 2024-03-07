import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesSchema } from 'src/models/database/Courses';
import { CoursesRepository } from 'src/repository/Courses/CoursesRepository';
import { CoursesService } from 'src/services/Courses/Courses.service';
import { CoursesController } from 'src/controllers/Courses/Courses.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Courses', schema: CoursesSchema }]),
  ],
  controllers: [CoursesController],
  providers: [
    CoursesService,
    { provide: 'ICoursesRepository', useClass: CoursesRepository },
  ],
  exports: [CoursesService],
})
export class CoursesModule {}
