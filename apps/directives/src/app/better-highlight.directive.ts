import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  /**
   * Represents the background color of a UI element.
   *
   * @type {string}
   */
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'style',
      'background-color:orange;'
    );
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'style', 'background-color:unset;');

    this.backgroundColor = 'unset';
  }
}
