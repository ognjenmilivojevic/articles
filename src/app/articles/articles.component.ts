import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article.class';
import { ArticleList } from '../ArticleList';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  pictureUrl: string;
  articleList: Array<Article> = [];
  color: string;
  message: string;
  existArticle: Boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.pictureUrl = "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
  }

  ngOnInit() {
    let category = this.route.snapshot.paramMap.get('category');
    if (category == "sve") {
      this.articleList = ArticleList;
    }
    else {
      this.articleList = ArticleList.filter(x => x.category == category);
    }

  }
  display(color) {
    this.color = color;

  }
  getSearchValue(value) {
    if (value != " ") {
      this.articleList = ArticleList.filter(x => x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      if (ArticleList.filter(x => x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())).length == 0) {
        this.existArticle = false;
        this.message = "Не постоји чланак са унесеним насловом";
      }
      else {
        this.existArticle = true;

      }
    }
  }

}
