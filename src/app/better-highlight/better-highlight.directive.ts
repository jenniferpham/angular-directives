import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]' //square brackets here means it is in attribute and usually doesn't need square brackets on the html DOM unless it is @Input alias
})

export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';  //property binding (enclosed in square brackets) on attribute
  @Input('appBetterHighlight') highlightColor: string = 'blue'; //property binding on attribute. If property binding alias is same as directive name, you put the directive name in square brackets
  @HostBinding('style.backgroundColor') backgroundColor: string; //camelcase even though DOM uses dashes. The DOM tag must have this property. For example, only inputs have values. It can bind to any property of the element the attribute sitting on.

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //you should use the Renderer for any DOM manipulations.
    //you can do more than simply change the styling of an element via setStyle()
    //renderer better approach than basic-highlight b/c not all directives have access to the dom. better to use renderer for DOM access and method to access DOM
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //could also set tags as additional arguments
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); 
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
