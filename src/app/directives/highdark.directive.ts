import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighdark]'
})
export class HighdarkDirective {

  color1 = "#E844FF";
  color2 = "#8739FF";

  constructor(el: ElementRef) {
    el.nativeElement.style.background = `linear-gradient(45deg, ${this.color1} 0%, ${this.color2} 100%)`;
  }

}
