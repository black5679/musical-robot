import { IQuery } from "@nestjs/cqrs";

export class GetByIdArticleQuery implements IQuery {
  constructor(
    public readonly id: number
  ) {}
  }