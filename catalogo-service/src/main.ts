import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
  console.log('Catalogo-service rodando na porta 3002');
}
bootstrap();
