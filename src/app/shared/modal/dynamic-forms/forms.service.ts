import {Injectable} from '@angular/core';
import {FormsConfig} from './forms-config';
import {of} from 'rxjs';
import {Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FormsService {
  genres: any;
  authors: any;

  constructor(private http: HttpClient) {
    this.http.get(`http://localhost:3000/genres`).subscribe(genres => {
      this.genres = genres;
    })
    this.http.get(`http://localhost:3000/authors`).subscribe(authors => {
      this.authors = authors;
    })
  }

  getFields(type: string): any {
    if (this.setupFields(type)) {
      return of(this.setupFields(type).sort((a: any, b: any) => a.order - b.order));
    }
  }

  setupFields(type: string): any {

    switch (type) {
      case 'authors':
        return [
          new TextboxQuestion({
            key: 'first name',
            label: 'First name',
            value: '',
            order: 1,
            validators: [Validators.required, Validators.maxLength(15)]
          }),

          new TextboxQuestion({
            key: 'last name',
            label: 'Last name',
            value: '',
            order: 1,
            validators: [Validators.required, Validators.maxLength(15)]
          }),

          new TextboxQuestion({
            key: 'birth date',
            label: 'Birth Date',
            value: '',
            order: 1,
          }),
        ];
        break;
      case 'books':
        return [
          new TextboxQuestion({
            key: 'name',
            label: 'Name',
            value: '',
            order: 1,
            validators: [Validators.required]
          }),

          new TextboxQuestion({
            key: 'published',
            label: 'published',
            value: '',
            order: 1,
          }),

          new TextboxQuestion({
            key: 'pages',
            label: 'pages',
            order: 2,
          }),

          new DropdownQuestion({
            key: 'genre',
            label: 'Genre',
            options: this.genres,
            order: 3,
            validators: [Validators.required],
            disabled: false
          }),

          new DropdownQuestion({
            key: 'author',
            label: 'Author',
            options: this.authors,
            order: 4,
            validators: [Validators.required],
            disabled: true
          }),
        ];
        break;
      case 'genres':
        return [
          new TextboxQuestion({
            key: 'name',
            label: 'Genre Name',
            value: '',
            order: 1,
            validators: [Validators.required]
          }),
        ];
        break;
      default :
        return ''
    }
  }


}

export class TextboxQuestion extends FormsConfig<string> {
  override controlType = 'textbox';
}

export class DropdownQuestion extends FormsConfig<string> {
  override controlType = 'dropdown';
}


