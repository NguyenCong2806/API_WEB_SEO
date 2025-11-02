import { PageContentRepository } from './../../repository/pagecontent/PageContent.repository';
import { PageContentSchema } from './../../models/database/PageContent';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PageContentController } from 'src/controllers/pagecontent/pagecontent.controller';
import { PageContentService } from 'src/services/pagecontent/Pagecontent.serice';
import { IPageContentservice } from 'src/services/pagecontent/IPagecontent.serice';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PageContent', schema: PageContentSchema },
    ]),
  ],
  controllers: [PageContentController],
  providers: [
    {
      provide: IPageContentservice, // <-- Token (Giá trị)
      useClass: PageContentService, // <-- Class (Thực thi)
    },
    { provide: 'IPageContentRepository', useClass: PageContentRepository },
  ],
  exports: [IPageContentservice],
})
export class PageContentModule {}
