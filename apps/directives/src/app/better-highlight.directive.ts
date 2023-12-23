import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'unset';
  @Input() highlightColor: string = 'orange';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'style', `background-color:${this.highlightColor};`);

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'style', `background-color:${this.defaultColor};`);

    this.backgroundColor = this.defaultColor;
  }
}
