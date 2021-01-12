import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue'; // alias

  // Bind to a property which value become important, CamelCase is important
  // @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor;

  // ElementRef to get easy access to the element we would like to manipulate
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Must use nativeElement to access the element
    // Additional parameter flags can be used for optional info as "!" to override other styles
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  // As parameter the name of the event supported by the dom elements that this directive wits on
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //  this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }


}
