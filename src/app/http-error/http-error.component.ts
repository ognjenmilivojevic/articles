import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.css']
})
export class HttpErrorComponent implements OnInit {

  errorMessage:string;
  errorCode:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let error= this.route.snapshot.paramMap.get('message').split('-');
    this.errorMessage=error[0];
    this.errorCode=error[1];
    
  }

}
