import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Article } from "src/domain/models/article.model";
import { ArticleRepository } from "src/infrastructure/repositories/article.repository";
import { CreateArticleCommand } from "./create-article.command";

@CommandHandler(CreateArticleCommand)
export class CreateArticleHandler implements ICommandHandler<CreateArticleCommand> {
  constructor(@Inject('IArticleRepository')
  private readonly articleRepository: ArticleRepository) {}

  async execute(command: CreateArticleCommand) : Promise<Article> {
    const article = new Article();
    article.title = command.title;
    article.content = command.content;
    return this.articleRepository.save(article);
  }
}