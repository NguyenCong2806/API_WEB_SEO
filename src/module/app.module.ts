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
