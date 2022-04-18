import { Directive, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';


@Directive({
  selector: '[appUserNotFound]'
})
export class UserNotFoundDirective  {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
  }
}
