import { Article } from "../models/article.model";

export interface IArticleRepository {
    findAll(): Promise<Article[]>;
    findOne(id: number): Promise<Article>;
    save(article: Article): Promise<Article>;
  }