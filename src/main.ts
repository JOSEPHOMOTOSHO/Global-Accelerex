import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform:true}));
  app.setGlobalPrefix('api')

  const options = new DocumentBuilder().setTitle('Global accelerex Test Api')
  .setDescription('Test api for global accelerex')
  .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api',app,document)
  await app.listen(+process.env.PORT || 3000);
}
bootstrap();
