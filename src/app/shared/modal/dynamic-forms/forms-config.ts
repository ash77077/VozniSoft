export class FormsConfig<T> {
  value: T|any;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {name: string, value?: string}[];
  validators?: any[];
  disabled?: any;

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: {name: string, value?: string}[];
    validators?: any[];
    disabled?: any;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.disabled = options.disabled || false;
  }
}
