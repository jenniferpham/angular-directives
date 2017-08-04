//EXAMPLE OF STRUCTURAL DIRECTIVE
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  //SET method - whenever this condition or property changes then it executes method; setter of property. 
  @Input() set appUnless(condition: boolean) {
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainerRef.clear(); //remove this from the DOM
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef){ }
  //template is WHAT, view is WHERE
}
