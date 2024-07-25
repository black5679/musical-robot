import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe({
      next: (data : any) => {
        this.articles = data;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Error loading articles';
        this.loading = false;
      }
    });
  }
}
