import { Component, Input, OnInit } from '@angular/core';
import { FormsConfig } from "./forms-config";
import {FormGroup} from "@angular/forms";
import {FormsService} from "./forms.service";


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html'
})

export class DynamicFormsComponent implements OnInit {
  @Input() dynForm!: FormsConfig<string>;
  @Input() form: FormGroup | any;
  get isValid() { return this.form.controls[this.dynForm.key].valid; }

  constructor() {
  }

  ngOnInit(): void {
  }

}
