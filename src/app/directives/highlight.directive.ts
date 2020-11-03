import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  color1 = "#E844FF";
  color2 = "#8739FF";

  constructor(el: ElementRef) {
    el.nativeElement.style.background = `linear-gradient(90deg, ${this.color1} 0%, ${this.color2} 100%)`;
    el.nativeElement.style.opacity = 0.1;
  }

}
