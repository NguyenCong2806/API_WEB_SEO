import { ContentController } from './../../controllers/content/content.controller';
import { ContentRepository } from './../../repository/content/ContentRepository';
import { ContentService } from './../../services/content/content.service';
import { ContentSchema } from './../../models/database/Content';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IContentService } from 'src/services/content/IContentService';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Content', schema: ContentSchema }]),
  ],
  controllers: [ContentController],
  providers: [
    {
      provide: IContentService, // <-- Token (Giá trị)
      useClass: ContentService,  // <-- Class (Thực thi)
    },
    { provide: 'IContentRepository', useClass: ContentRepository },
  ],
  exports: [IContentService],
})
export class ContentModule { }
