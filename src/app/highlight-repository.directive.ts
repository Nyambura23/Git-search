import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightRepository]'
})
export class HighlightRepositoryDirective {

  constructor(private elem:ElementRef) { 
    
  }

}
