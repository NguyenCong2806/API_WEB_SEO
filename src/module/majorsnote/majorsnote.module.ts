import { MajorsNoteRepository } from './../../repository/majorsnote/MajorsNoteRepository';
import { MajorsNoteService } from './../../services/majorsnote/majorsnote.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MajorsNoteSchema } from 'src/models/database/MajorsNote';
import { MajorsNoteController } from 'src/controllers/majorsnote/majorsnote.controller';
import { IMajorsNoteService } from 'src/services/majorsnote/IMajorsNoteService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MajorsNote', schema: MajorsNoteSchema },
    ]),
  ],
  controllers: [MajorsNoteController],
  providers: [
    {
      provide: IMajorsNoteService, // <-- Token (Giá trị)
      useClass: MajorsNoteService,  // <-- Class (Thực thi)
    },
    { provide: 'IMajorsNoteRepository', useClass: MajorsNoteRepository },
  ],
  exports: [IMajorsNoteService],
})
export class MajorsNoteModule {}
