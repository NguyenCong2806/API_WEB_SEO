import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContenttypeSchema } from 'src/models/database/Contenttype';
import { ContenttypeRepository } from 'src/repository/contenttype/ContenttypeRepository';
import { ContenttypeService } from 'src/services/contenttype/contenttype.service';
import { ContenttypeController } from 'src/controllers/contenttype/contenttype.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Contenttype', schema: ContenttypeSchema },
    ]),
  ],
  controllers: [ContenttypeController],
  providers: [
    ContenttypeService,
    { provide: 'IContenttypeRepository', useClass: ContenttypeRepository },
  ],
  exports: [ContenttypeService],
})
export class ContenttypeModule {}
