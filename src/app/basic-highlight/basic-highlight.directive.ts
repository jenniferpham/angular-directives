import {Directive, ElementRef, OnInit} from '@angular/core';
//directive has OnInit and OnDestroy, but not all the other lifecycle looks

@Directive({
    selector: '[appBasicHighlight]' //attribute style
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}