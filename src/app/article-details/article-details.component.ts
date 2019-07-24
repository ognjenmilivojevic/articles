import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article.class';
import { ArticleList } from '../ArticleList';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit() {
    let id: Number = Number(this.route.snapshot.paramMap.get('id'));
    this.article = ArticleList.find(x => x.id == id)
    console.log("asdasdasd")
    console.log(this.article.title)
  }

}
