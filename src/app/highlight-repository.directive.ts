import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightRepository]'
})
export class HighlightRepositoryDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('cyan');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor = 'cyan';

  }

}
