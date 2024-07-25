import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './views/article/article-detail/article-detail.component';
import { ArticleFormComponent } from './views/article/article-form/article-form.component';
import { ArticleListComponent } from './views/article/article-list/article-list.component';

const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'article/:id', component: ArticleDetailComponent },
    { path: 'create', component: ArticleFormComponent },
    { path: 'edit/:id', component: ArticleFormComponent },
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
