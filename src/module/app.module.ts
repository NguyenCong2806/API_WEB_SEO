import { ModalPopupModule } from './modalpopup/modalpopup.module';
import { LogoModule } from './logo/logo.module';
import { BoxImageTextModule } from './boximagetext/boximagetext.module';
import { MajorsNoteModule } from './majorsnote/majorsnote.module';
import { CardNumbersModule } from './cardnumbers/cardnumbers.module';
import { ArticleHeaderModule } from './articleheader/articleheader.module';
import { ContactModule } from './contact/contact.module';
import { CardModule } from './card/card.module';
import { FileModule } from './file/file.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app/app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user.module';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ThrottlerModule } from '@nestjs/throttler';
import { CarouselModule } from './carousel/carousel.module';
import { AboutModule } from './about/about.module';
import { ContentModule } from './content/content.module';
import { ContenttypeModule } from './contenttype/contenttype.module';
import { CoursesModule } from './courses/courses.module';
import { ExpertModule } from './expert/expert.module';
import { FeedbackModule } from './feedback/feedback.module';
import { PopularModule } from './popular/popular.module';
import { MediaModule } from './media/media.module';
import { CtaModule } from './cta/cta.module';
import { AccordionModule } from './accordion/accordion.module';
import { TabsModule } from './tabs/tabs.module';
import { ImagelistinfoModule } from './imagelistinfo/imagelistinfo.module';
import { MenuModule } from './menu/menu.module';
import { PageContentModule } from './pagecontent/pagecontent.module';
import { ParallaxModule } from './parallax/parallax.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { FooterBoxModule } from './footerbox/footerbox.module';
// import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.DATABASE_URL + process.env.DATABASE_NAME,
    ),
    AuthModule,
    UsersModule,
    JwtModule,
    FileModule,
    CarouselModule,
    AboutModule,
    CardModule,
    ContactModule,
    ContentModule,
    ContenttypeModule,
    CoursesModule,
    ExpertModule,
    FeedbackModule,
    PopularModule,
    MediaModule,
    ArticleHeaderModule,
    CardNumbersModule,
    CtaModule,
    MajorsNoteModule,
    BoxImageTextModule,
    LogoModule,
    ModalPopupModule,
    AccordionModule,
    TabsModule,
    ImagelistinfoModule,
    MenuModule,
    PageContentModule,
    ParallaxModule,
    AdvertisementModule,
    FooterBoxModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'),
      serveRoot: '/public/',
      exclude: ['/api/(.*)'],
    }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    // MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
