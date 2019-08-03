import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Article } from '../article.class';
import { ArticleList } from '../ArticleList';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '../response.class';

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
  constructor(private route: ActivatedRoute, private router: Router, private httpService:HttpService,private http:HttpClient) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.pictureUrl = "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
  }

   ngOnInit() {
    let category: string = this.route.snapshot.paramMap.get('category');
    

   this.httpService.getTopHeadline(category).subscribe(
     (x) =>{
      this.articleList=x;
     },
     (error) => {
      console.log(error)
      this.router.navigate(['/error', error.statusText + "-" + error.status]);
    },
    () => {

    }
   );
 

  }
  display(color) {
    this.color = color;

  }
  getSearchValue(value) {
    if (value != " ") {
      this.articleList = this.articleList.filter(x => x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      if (this.articleList.filter(x => x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())).length == 0) {
        this.existArticle = false;
        this.message = "Не постоји чланак са унесеним насловом";
      }
      else {
        this.existArticle = true;

      }
    }
  }

}


