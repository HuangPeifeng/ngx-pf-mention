import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPfMentionDirective } from '.';
import { NgxPfMentionDialogComponent, NgxPfMentionDialogDirective } from './ngx-pf-mention-dialog';

@NgModule({
  declarations: [NgxPfMentionDirective, NgxPfMentionDialogComponent, NgxPfMentionDialogDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NgxPfMentionDirective,
    NgxPfMentionDialogDirective
  ],
  entryComponents: [
    NgxPfMentionDialogComponent
  ]
})
export class NgxPfMentionModule { }
