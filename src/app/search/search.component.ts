import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  condition: Boolean = false;
  serchValue: string;

  @Output() inputValueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  expand() {

    this.condition = !this.condition;
  }
  serch() {
    this.inputValueChanged.emit(this.serchValue);
  }
}
