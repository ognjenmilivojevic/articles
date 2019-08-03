import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpErrorComponent } from './http-error/http-error.component';

const appRoutes: Routes = [
  { path: 'clanci/:category', component: ArticlesComponent },
  { path: 'clanak/:id', component: ArticleDetailsComponent },
  {
    path: '',
    redirectTo: '/clanci/sve',
    pathMatch: 'full'
  },
  {path:"error/:message",component:HttpErrorComponent},
  {path:"**",component:PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    SearchComponent,
    PageNotFoundComponent,
    HttpErrorComponent

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
