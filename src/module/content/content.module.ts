import { ContentController } from './../../controllers/content/content.controller';
import { ContentRepository } from './../../repository/content/ContentRepository';
import { ContentService } from './../../services/content/content.service';
import { ContentSchema } from './../../models/database/Content';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Content', schema: ContentSchema }]),
  ],
  controllers: [ContentController],
  providers: [
    ContentService,
    { provide: 'IContentRepository', useClass: ContentRepository },
  ],
  exports: [ContentService],
})
export class ContentModule {}
