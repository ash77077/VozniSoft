import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appData]'
})
export class ListDirective implements AfterViewInit {
  @Input() appData = ''

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    if (this.appData) {
      let element = this.el.nativeElement.getElementsByClassName('list-item')
      let frac = '1fr'
      for (let i = 0; i < this.appData.length; i++) {
        frac += ' 1fr'
      }
      for (let i = 0; i < element.length; i++) {
        element[i].style.gridTemplateColumns = frac
      }
    }
  }
}


