import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const hosts = process.env.HOSTS_URI as string;
const allowHosts = hosts?.split(' ');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowHosts,
  });
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Hireo – Modern Job Posting Web App')
    .setDescription(
      `Hireo is a simple and intuitive job posting web application where employers can create job listings and job seekers can browse, search, and view detailed job information.`,
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
