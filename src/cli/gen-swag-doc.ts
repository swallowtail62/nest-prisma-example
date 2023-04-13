import * as fs from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '@/app.module';

const docsDirPath = path.resolve(__dirname, '../../swag');
const docFilePath = path.resolve(docsDirPath, 'swagger.json');

async function main() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  fs.mkdirSync(docsDirPath, { recursive: true });
  fs.writeFileSync(docFilePath, JSON.stringify(document));
}

main();
