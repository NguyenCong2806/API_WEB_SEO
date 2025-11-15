import { Buffer } from 'buffer';

if (typeof (global as any).SlowBuffer === 'undefined') {
  (global as any).SlowBuffer = Buffer;
}
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
 // --- CẤU HÌNH CORS TỪ BIẾN MÔI TRƯỜNG ---
  // 1. Đọc biến từ .env, fallback về mảng rỗng nếu không có
  const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',') // 2. Tách chuỗi thành mảng
    : [];

  // (Tùy chọn) Log ra để kiểm tra
  if (allowedOrigins.length > 0) {
    logger.log(`CORS enabled for origins: ${allowedOrigins.join(', ')}`);
  } else {
    logger.warn(`CORS is not configured with specific origins.`);
  }

  app.enableCors({
    origin: allowedOrigins, // 3. Sử dụng mảng từ biến môi trường
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  // --- KẾT THÚC CẬP NHẬT CORS ---
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
