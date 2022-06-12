import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalService} from "../services/global.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any;
  constructor(
    private _global: GlobalService
    ) { }

  ngOnInit(): void {
    this._global.getData('books').subscribe(data => {
      this.books = data
    })
    // setTimeout(()=>{
    //   const channel = new BroadcastChannel('app-data');
    //   channel.postMessage(null);
    // }, 5000)
  }

}
