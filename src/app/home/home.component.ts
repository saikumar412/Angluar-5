import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an item';
  itemText: string = 'My first list item';
  items = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.items.length;
  }

  addItem() {
    this.items.push(this.itemText);
    this.itemText = '';
    this.itemCount = this.items.length;
  }

}
