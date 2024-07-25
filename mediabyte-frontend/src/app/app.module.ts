import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';

// Servicios
import { AppRoutingModule } from './app-routing.module';
import { ArticleListComponent } from './views/article/article-list/article-list.component';
import { ArticleDetailComponent } from './views/article/article-detail/article-detail.component';
import { ArticleFormComponent } from './views/article/article-form/article-form.component';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
