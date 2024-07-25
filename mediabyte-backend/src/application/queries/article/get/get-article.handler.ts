import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Article } from "src/domain/models/article.model";
import { ArticleRepository } from "src/infrastructure/repositories/article.repository";
import { GetArticleQuery } from "./get-article.query";

@QueryHandler(GetArticleQuery)
export class GetArticleHandler implements IQueryHandler<GetArticleQuery, Article[]> {
  constructor(@Inject('IArticleRepository')
  private readonly articleRepository: ArticleRepository) {}

  async execute() : Promise<Article[]> {
    const articles = this.articleRepository.findAll();
    return articles;
  }
}