import { MajorsNoteRepository } from './../../repository/majorsnote/MajorsNoteRepository';
import { MajorsNoteService } from './../../services/majorsnote/majorsnote.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MajorsNoteSchema } from 'src/models/database/MajorsNote';
import { MajorsNoteController } from 'src/controllers/majorsnote/majorsnote.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MajorsNote', schema: MajorsNoteSchema },
    ]),
  ],
  controllers: [MajorsNoteController],
  providers: [
    MajorsNoteService,
    { provide: 'IMajorsNoteRepository', useClass: MajorsNoteRepository },
  ],
  exports: [MajorsNoteService],
})
export class MajorsNoteModule {}
