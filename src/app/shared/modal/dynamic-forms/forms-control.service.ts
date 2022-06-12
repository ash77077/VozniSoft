import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {FormsConfig} from "./forms-config";

@Injectable()
export class DynFormsControlService {
  constructor() {
  }

  toFormGroup(forms: FormsConfig<string>[]) {
    const group: any = {};
      forms.forEach(form => {
      group[form.key] = form.validators
        ? new FormControl(form.value || '', form.validators)
        : new FormControl(form.value || '');
    });
    return new FormGroup(group);
  }
}
