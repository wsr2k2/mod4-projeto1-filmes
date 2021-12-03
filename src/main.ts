import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FilmesModule } from './filmes/filmes.module';

async function bootstrap() {
  const app = await NestFactory.create(FilmesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
