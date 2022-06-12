import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {GlobalService} from "../../services/global.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {FormsConfig} from "./dynamic-forms/forms-config";
import {DynFormsControlService} from "./dynamic-forms/forms-control.service";
import {FormsService} from './dynamic-forms/forms.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [DynFormsControlService, FormsService]
})
export class ModalComponent implements OnInit, OnDestroy {

  dynForms: FormsConfig<string>[] | any = [];
  form: FormGroup | any;
  type: any
  payLoad = '';
  subscribe$: any;
  subscribe2$: any;

  constructor(
    private _modalSvc: ModalService,
    private _globalSvc: GlobalService,
    private router: Router,
    private _fcs: DynFormsControlService,
    private _formService: FormsService
  ) {
  }

  data: any

  ngOnInit(): void {
    this.subscribe$ = this._modalSvc.modal.subscribe(d => {
      if (d && ['authors', 'books', 'genres'].includes(d.type)) {
        this.dynForms = d.data
        this.form = this._fcs.toFormGroup(d.data as FormsConfig<string>[]);
        this.data = d
      } else {
        this.data = d
      }
      this.form?.valueChanges.subscribe((val: any) => {
        if (val.genre) {
          this.dynForms[4].disabled = false
        }
      })
    })
  }

  onSubmit() {
    let res = this.form?.getRawValue();
    let idGen = (Math.random() * 10000).toFixed(7).replace('.', '')
    if (this.form.get('first name') && this.form.get('last name')) {
      this.form.value.name = this.form.get('first name').value + " " + this.form.get('last name').value
    }
    this._globalSvc.createData(this.data.type, {id: idGen, ...res}).subscribe()
    this.closeModal()
  }

  closeModal() {
    this._modalSvc.modal.next(null)
  }

  deleteItem() {
    this._globalSvc.deleteData(this.data.type.split(' ')[0], this.data.data.id).subscribe()
    this.closeModal()
  }

  AddItem() {

  }

  ngOnDestroy() {
    this.subscribe$.unsubscribe()
    this.subscribe2$.unsubscribe()
  }

}
