import { Injectable } from '@angular/core';
import { Article } from './article.class';
import { HttpClient } from '@angular/common/http';
import { Response } from './response.class';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GoogleArticle } from './google-article.class';

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient, private router: Router ) {


  }

  getTopHeadline(category?:string):Observable<Array<Article>> {
    let i:number = 0;
    return this.http.get<Response>(this.setUrl(category))
      .pipe(
        map((x:Response) => <Array<Article>> 
          x.articles.map( (x:GoogleArticle) => <Article><unknown>{
            date: x.publishedAt,
            description: x.description,
            title: x.title,
            imageUrl: x.urlToImage,
            text: x.content,
            source:x.url,
            author:x.author,
            id: i++
          })
          
        )
      )
    }
      
  getTopHeadlineWithId(id:number,category?:string):Observable<Article> {
    let i:number = 0;
    return this.http.get<Response>(this.setUrl(category))
      .pipe(
        map((x:Response) => <Article>
          x.articles.map( (x:GoogleArticle) => <Article><unknown>{
            date: x.publishedAt,
            description: x.description,
            title: x.title,
            imageUrl: x.urlToImage,
            text: x.content,
            source:x.url,
            author:x.author,
            id: i++
          }).find(x=>x.id==id)
        )
      )
    }

    setUrl(category:string):string{
      let url;
      switch(category) { 
        case "top-news": { 
           url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52a49212db5a4aba9adc3a75323f15b"; 
           break; 
        } 
        case "bitcoin": { 
           url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=52a49212db5a4aba9adcc3a75323f15b"
           ;
           break; 
        } 
        case "apple": {
          url="https://newsapi.org/v2/everything?q=apple&from=2019-07-30&to=2019-07-30&sortBy=popularity&apiKey=52a49212db5a4aba9adcc3a75323f15b";
          break;
        }
        case "wall-street":{
          url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=52a49212db5a4aba9adcc3a75323f15b";
          break;
        }
        default: { 
           url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52a49212db5a4aba9adcc3a75323f15b";
           break; 
        } 
     } 
     return url;
    }

}
