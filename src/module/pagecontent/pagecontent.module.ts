import { PageContentRepository } from './../../repository/pagecontent/PageContent.repository';
import { PageContentSchema } from './../../models/database/PageContent';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PageContentController } from 'src/controllers/pagecontent/pagecontent.controller';
import { PageContentService } from 'src/services/pagecontent/Pagecontent.serice';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PageContent', schema: PageContentSchema },
    ]),
    JwtModule,
  ],
  controllers: [PageContentController],
  providers: [
    PageContentService,
    { provide: 'IPageContentRepository', useClass: PageContentRepository },
  ],
  exports: [PageContentService],
})
export class PageContentModule {}
