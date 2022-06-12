import { Component, OnInit } from '@angular/core';
import {ModalService} from "../services/modal.service";
import {GlobalService} from "../services/global.service";
import {FormsService} from "../shared/modal/dynamic-forms/forms.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [FormsService]
})
export class AuthorsComponent implements OnInit {

  authors: any

  constructor(
    private _modalSvc: ModalService,
    private _global: GlobalService,
    private _formService: FormsService
  ) { }

  ngOnInit(): void {
    this._global.getData('authors').subscribe(data => {
      this.authors = data
    })
  }

}
