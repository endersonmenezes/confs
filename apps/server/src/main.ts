import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { join } from 'path';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  let apiPrefix = '';
  if (!environment.production) {
    apiPrefix = 'api';
    app.setGlobalPrefix(apiPrefix);
  }

  app.useStaticAssets(join(__dirname, 'assets'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${apiPrefix}`);
}

bootstrap();
