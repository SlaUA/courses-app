import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective implements OnInit {
  @Input() appCustomBorder: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const today = moment();
    console.log(today);
    // if(creationDate < currentDate && creationDate >= currentDate - 14days){
    //   this.el.nativeElement.style.border = '1px solid red';
    // }
    // if(){

    // }
  }
}
