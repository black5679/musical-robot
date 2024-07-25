import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/domain/models/article.model';
import { ArticleRepository } from 'src/infrastructure/repositories/article.repository';
import { CreateArticleHandler } from '../commands/article/create/create-article.handler';
import { GetByIdArticleHandler } from '../queries/article/get-by-id/get-by-id-article.handler';
import { GetArticleHandler } from '../queries/article/get/get-article.handler';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [
      GetArticleHandler,
      GetByIdArticleHandler,
      CreateArticleHandler,
      {
        provide: 'IArticleRepository',
        useClass: ArticleRepository,
      },
    ],
    exports: [],
  })
  export class ArticleModule {}