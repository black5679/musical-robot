import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateArticleCommand } from "src/application/commands/article/create/create-article.command";
import { GetByIdArticleQuery } from "src/application/queries/article/get-by-id/get-by-id-article.query";
import { GetArticleQuery } from "src/application/queries/article/get/get-article.query";
import { Article } from "src/domain/models/article.model";
import { CreateArticleRequest } from "../requests/article/create-article.request";

@Controller('article')
export class ArticleController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return this.queryBus.execute(new GetArticleQuery());
  }
  
  @Post()
  async create(@Body() request: CreateArticleRequest) {
    const response = await this.commandBus.execute(new CreateArticleCommand(request.title, request.content))
        return response;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.queryBus.execute(new GetByIdArticleQuery(id));
  }
}