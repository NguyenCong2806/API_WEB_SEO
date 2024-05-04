import { ContentController } from './../../controllers/content/content.controller';
import { ContentRepository } from './../../repository/content/ContentRepository';
import { ContentService } from './../../services/content/content.service';
import { ContentSchema } from './../../models/database/Content';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Content', schema: ContentSchema }]),
    JwtModule,
  ],
  controllers: [ContentController],
  providers: [
    ContentService,
    { provide: 'IContentRepository', useClass: ContentRepository },
  ],
  exports: [ContentService],
})
export class ContentModule {}
