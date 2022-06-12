import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']

})
export class ListComponent implements OnInit {
  @Input() data: any
  headerNames: string[] | any;

  constructor(
    private router: Router,
    private _modalSvc: ModalService
  ) {
  }

  ngOnInit(): void {
    this.headerNames = Object.keys(this.data[0]).sort()
  }

  editData() {
    this._modalSvc.modal.next(this.data)
  }

  deleteData(data: any) {
    let type = this.router.url.split('/')[1]
    this._modalSvc.modal.next({type : type +' confirm', data});
  }
}
