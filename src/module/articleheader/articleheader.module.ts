import { ArticleHeaderController } from './../../controllers/articleheader/articleheader.controller';
import { ArticleHeaderService } from './../../services/articleheader/articleheader.service';
import { ArticleHeaderRespository } from './../../repository/articleheader/ArticleHeaderRespository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleHeaderSchema } from 'src/models/database/ArticleHeader';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ArticleHeader', schema: ArticleHeaderSchema },
    ]),
  ],
  controllers: [ArticleHeaderController],
  providers: [
    ArticleHeaderService,
    {
      provide: 'IArticleHeaderRespository',
      useClass: ArticleHeaderRespository,
    },
  ],
  exports: [ArticleHeaderService],
})
export class ArticleHeaderModule {}
