import { ArticleHeaderController } from './../../controllers/articleheader/articleheader.controller';
import { ArticleHeaderRespository } from './../../repository/articleheader/ArticleHeaderRespository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleHeaderSchema } from 'src/models/database/ArticleHeader';
import { ArticleHeaderService } from 'src/services/articleheader/articleheader.service';
import { IArticleHeaderService } from 'src/services/articleheader/IArticleHeaderService';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ArticleHeader', schema: ArticleHeaderSchema },
    ]),

  ],
  controllers: [ArticleHeaderController],
  providers: [
    {
      provide: IArticleHeaderService,
      useClass: ArticleHeaderService,
    },
    {
      provide: 'IArticleHeaderRespository',
      useClass: ArticleHeaderRespository,
    },
  ],
  exports: [IArticleHeaderService],
})
export class ArticleHeaderModule { }
