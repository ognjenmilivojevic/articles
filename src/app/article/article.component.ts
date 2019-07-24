import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() id: Number;
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() text: string;
  @Input() date: Date;
  @Input() color: string;
  @Input() category: string;

  @Output() clickChange = new EventEmitter();
  viewMore: Boolean;

  constructor() {
    this.viewMore = false;
    this.color = '#333';

  }

  ngOnInit() {
    if (this.category == "kultura") {
      this.color = "#77212E";
    }
    if (this.category == "svet") {
      this.color = "#6B5B95";
    }

  }
  showHide() {
    this.viewMore = !this.viewMore;
    this.clickChange.emit(this.category);
  }

}
