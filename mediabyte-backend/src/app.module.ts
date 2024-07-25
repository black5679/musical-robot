import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './api/controllers/article.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './application/modules/article.module';
import { Article } from './domain/models/article.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'mediabyte.mssql.somee.com',
    port: 1433,
    username: 'black56717_SQLLogin_1',
    password: '7qqmohj6s5',
    database: 'mediabyte',
    entities: [Article],
    synchronize: true,
    options: {
      encrypt: true, // Encriptar la conexión
      trustServerCertificate: true, // Permitir certificados autofirmados
    },
  }),
  TypeOrmModule.forFeature([Article]),
  CqrsModule,
  ArticleModule,
],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
