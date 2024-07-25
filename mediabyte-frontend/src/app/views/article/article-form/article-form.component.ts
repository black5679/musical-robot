import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;
  isEditMode: boolean = false;
  articleId: number | null = null;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.articleId) {
      this.isEditMode = true;
      this.loadArticle();
    }
  }

  loadArticle(): void {
    this.articleService.getArticle(this.articleId!).subscribe({
      next: (data) => {
        this.articleForm.patchValue(data);
      },
      error: (err) => {
        this.error = 'Error loading article';
      }
    });
  }

  onSubmit(): void {
    if (this.articleForm.invalid) {
      return;
    }

    const articleData = this.articleForm.value;

    if (this.isEditMode) {
      this.articleService.updateArticle(this.articleId!, articleData).subscribe({
        next: () => this.router.navigate(['/articles']),
        error: (err) => this.error = 'Error updating article'
      });
    } else {
      this.articleService.createArticle(articleData).subscribe({
        next: () => this.router.navigate(['/articles']),
        error: (err) => this.error = 'Error creating article'
      });
    }
  }
}
