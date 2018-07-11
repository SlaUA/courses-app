import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective implements OnInit {
  @Input() appCustomBorder: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const daysDifference = moment().diff(this.appCustomBorder, 'days');
    if (daysDifference > 0 && daysDifference <= 14) {
      this.el.nativeElement.style.borderColor = 'green';
    }
    if (daysDifference < 0) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
