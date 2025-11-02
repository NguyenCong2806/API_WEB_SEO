import { ArticleHeaderController } from './../../controllers/articleheader/articleheader.controller';
import { ArticleHeaderRespository } from './../../repository/articleheader/ArticleHeaderRespository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleHeaderSchema } from 'src/models/database/ArticleHeader';
import { IAdvertisementService } from 'src/services/advertisement/IAdvertisement.Service';
import { AdvertisementService } from 'src/services/advertisement/Advertisement.Service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ArticleHeader', schema: ArticleHeaderSchema },
    ]),

  ],
  controllers: [ArticleHeaderController],
  providers: [
    {
      provide: IAdvertisementService,
      useClass: AdvertisementService,
    },
    {
      provide: 'IArticleHeaderRespository',
      useClass: ArticleHeaderRespository,
    },
  ],
  exports: [IAdvertisementService],
})
export class ArticleHeaderModule { }
