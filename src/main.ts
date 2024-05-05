import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { AllExceptionFilter } from './Filter/AllExceptionFilter';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new AllExceptionFilter());
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.enableCors();
  await app.listen(parseInt(process.env.PORT, 10) || 3000);
  console.log(
    'server runing',
    `http://localhost:${parseInt(process.env.PORT, 10) || 3000}`,
  );
}
bootstrap();
