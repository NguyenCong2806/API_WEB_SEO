import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesSchema } from 'src/models/database/Courses';
import { CoursesRepository } from 'src/repository/Courses/CoursesRepository';
import { CoursesService } from 'src/services/Courses/Courses.service';
import { CoursesController } from 'src/controllers/Courses/Courses.controller';
import { ICoursesService } from 'src/services/Courses/ICoursesService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Courses', schema: CoursesSchema }]),
  ],
  controllers: [CoursesController],
  providers: [
    {
      provide: ICoursesService, // <-- Token (Giá trị)
      useClass: CoursesService, // <-- Class (Thực thi)
    },
    { provide: 'ICoursesRepository', useClass: CoursesRepository },
  ],
  exports: [ICoursesService],
})
export class CoursesModule {}
