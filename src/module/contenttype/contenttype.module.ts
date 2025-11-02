import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContenttypeSchema } from 'src/models/database/Contenttype';
import { ContenttypeRepository } from 'src/repository/contenttype/ContenttypeRepository';
import { ContenttypeService } from 'src/services/contenttype/contenttype.service';
import { ContenttypeController } from 'src/controllers/contenttype/contenttype.controller';
import { IContenttypeService } from 'src/services/contenttype/IContenttypeService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Contenttype', schema: ContenttypeSchema },
    ]),
  ],
  controllers: [ContenttypeController],
  providers: [
    {
      provide: IContenttypeService, // <-- Token (Giá trị)
      useClass: ContenttypeService,  // <-- Class (Thực thi)
    },
    { provide: 'IContenttypeRepository', useClass: ContenttypeRepository },
  ],
  exports: [IContenttypeService],
})
export class ContenttypeModule {}
