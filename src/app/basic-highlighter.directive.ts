import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlighter]'
})
export class BasicHighlighterDirective implements OnInit {
  @Input() appBasicHighlighter = 'black';
  @HostBinding('style.background-color') bgColor = 'black';
  constructor(private elRef: ElementRef, private render: Renderer2) {
    console.log('hi');
    console.log(elRef);
  }

  ngOnInit(): void {
   /*  this.render.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor); */
   this.bgColor = this.appBasicHighlighter;
  }

  /*    @HostListener('mouseenter', ['$event']) mouseOver(eventData: Event) {
      console.log('hi again', Event);
     } */

  @HostListener('mouseenter', ['$event.target.value']) mouseOver(eventData: any) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave', ['$event.target.value']) mouseOverLeave(eventData: any) {
   // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.bgColor = 'skyblue';
  }

}
