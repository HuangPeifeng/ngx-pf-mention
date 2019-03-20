import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxPfMentionDialog]'
})
export class NgxPfMentionDialogDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
