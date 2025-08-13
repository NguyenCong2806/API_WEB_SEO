import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { AllExceptionFilter } from './Filter/AllExceptionFilter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalFilters(new AllExceptionFilter());
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);

  console.log('Server running', `http://localhost:${port}/api/v1`);
}

bootstrap();
