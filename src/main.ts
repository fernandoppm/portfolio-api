import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); 

  app.useGlobalPipes(new ValidationPipe()); 

  const config = new DocumentBuilder()
    .setTitle('Plataforma de Portfólios API')
    .setDescription('API para gerenciar portfólios profissionais.')
    .setVersion('1.0')
    .addTag('portfolios')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); 
  await app.listen(3000);
}
bootstrap();
