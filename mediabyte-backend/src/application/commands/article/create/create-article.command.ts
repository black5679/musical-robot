import { ICommand } from "@nestjs/cqrs";

export class CreateArticleCommand implements ICommand {
    constructor(
        public readonly title: string,
        public readonly content: string,
      ) {}
  }