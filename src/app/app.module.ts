import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'clanci/:category', component: ArticlesComponent },
  { path: 'clanak/:id', component: ArticleDetailsComponent },
  {
    path: '',
    redirectTo: '/clanci/sve',
    pathMatch: 'full'
  },
  {path:"**",component:PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    SearchComponent,
    PageNotFoundComponent

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
