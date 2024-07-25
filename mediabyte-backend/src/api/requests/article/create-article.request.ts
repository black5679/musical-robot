import { IsNotEmpty } from 'class-validator'
export class CreateArticleRequest {
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly content: string;
}