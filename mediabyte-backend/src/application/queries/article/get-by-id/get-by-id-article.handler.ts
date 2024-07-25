import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Article } from "src/domain/models/article.model";
import { ArticleRepository } from "src/infrastructure/repositories/article.repository";
import { GetByIdArticleQuery } from "./get-by-id-article.query";

@QueryHandler(GetByIdArticleQuery)
export class GetByIdArticleHandler implements IQueryHandler<GetByIdArticleQuery, Article> {
  constructor(@Inject('IArticleRepository')
  private readonly articleRepository: ArticleRepository) {}

  async execute(query: GetByIdArticleQuery) : Promise<Article> {
    const article = this.articleRepository.findOne(query.id);
    return article;
  }
}