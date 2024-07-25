import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from "src/domain/models/article.model";
import { IArticleRepository } from "src/domain/repositories/article.repository";
import { Repository } from "typeorm";

@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(
    @InjectRepository(Article)
    private readonly repository: Repository<Article>,
  ) {}
  findOne(id: number): Promise<Article> {
    return this.repository.createQueryBuilder('Article').select(['Article.id', 'Article.title', 'Article.content']).getOne();
  }

  findAll(): Promise<Article[]> {
    return this.repository.createQueryBuilder('Article').select(['Article.id', 'Article.title', 'Article.content']).getMany();
  }

  save(article: Article): Promise<Article> {
    return this.repository.save(article);
  }
}