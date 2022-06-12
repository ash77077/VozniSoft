import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../services/global.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: any

  constructor(private _global: GlobalService) {
  }

   ngOnInit() {
    this._global.getData('genres').subscribe(data => {
      this.genres = data
    })
  }

}
