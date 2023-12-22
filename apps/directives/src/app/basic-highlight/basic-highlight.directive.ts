import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // NOTE: please do not directly modify the DOM, see better-highlight.component.ts
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
