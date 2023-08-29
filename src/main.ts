import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common/services';
import { AppModule } from './app.module';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  Logger.log(`Servidor rodando em localhost porta ${port}`, 'Bootstrap');
}
bootstrap();
