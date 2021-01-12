import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' // unique selector, [] makes it an attribute selector
})

// Injection is to have easy access to other classes, without having to instantiate on our own
// Must inform Angular in app.module that we have a new directive
export class BasicHightlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'; // Not best practise to access directly DOM like this
  }

}
