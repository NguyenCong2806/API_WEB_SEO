import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { AllExceptionFilter } from './Filter/AllExceptionFilter';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';

async function bootstrap() {
  const winstonLogger = WinstonModule.createLogger(winstonConfig);
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger, 
  });
  const logger = new Logger('Bootstrap');

  app.useGlobalFilters(new AllExceptionFilter());
  app.use(helmet({ crossOriginResourcePolicy: false }));
  // Cấu hình CORS chi tiết hơn
  app.enableCors({
    // Chỉ cho phép 2 domain này gọi API
    origin: [
      'http://localhost:5678',       // Frontend dev của bạn
      // 'https://my-website.com',      // Frontend production
      // 'https://admin.my-website.com' // Trang admin
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }));
  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);

  // Dùng logger thay vì console.log
  logger.log(`Server running on http://localhost:${port}/api/v1`);
}

bootstrap();
