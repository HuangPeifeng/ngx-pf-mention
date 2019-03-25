import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxPfMention]'
})
export class NgxPfMentionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
