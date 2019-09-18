import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // setStyle sets the style for a specific part of the div
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')
  }
}
