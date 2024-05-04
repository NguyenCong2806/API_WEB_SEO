import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesSchema } from 'src/models/database/Courses';
import { CoursesRepository } from 'src/repository/Courses/CoursesRepository';
import { CoursesService } from 'src/services/Courses/Courses.service';
import { CoursesController } from 'src/controllers/Courses/Courses.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Courses', schema: CoursesSchema }]),
    JwtModule,
  ],
  controllers: [CoursesController],
  providers: [
    CoursesService,
    { provide: 'ICoursesRepository', useClass: CoursesRepository },
  ],
  exports: [CoursesService],
})
export class CoursesModule {}
