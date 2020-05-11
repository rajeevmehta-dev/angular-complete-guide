import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggler($event: Event) {
    this.isOpen = this.elRef.nativeElement.contains($event.target) ? !this.isOpen : false;
  }
}
