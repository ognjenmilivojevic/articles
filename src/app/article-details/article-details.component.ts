import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article.class';
import { ArticleList } from '../ArticleList';
import { Response } from '../response.class';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article=new Article();
  articleList:Array<Article>=[];
  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient, private httpService:HttpService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
  }
  
   ngOnInit() {

    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getTopHeadlineWithId(id).subscribe(x=>{
    this.article=x
    console.log(this.article)
    });
   
  }

}
