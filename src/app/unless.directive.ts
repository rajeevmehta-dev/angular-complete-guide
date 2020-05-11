import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private _except:string;
  @Input()
  set appUnlessCheck(value: string) {
    this._except = value;
  }
  @Input() set appUnless(value: string) {
    if (value === this._except) {
      this.vc.createEmbeddedView(this.eleRef);
    } else {
      this.vc.clear();
    }
  }

  constructor(private eleRef: TemplateRef<any>, private vc: ViewContainerRef) {
   }

}
