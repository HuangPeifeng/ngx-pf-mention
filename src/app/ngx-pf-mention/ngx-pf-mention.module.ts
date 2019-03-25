import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPfMentionDirective } from './ngx-pf-mention.directive';
import { NgxPfMentionDialogComponent } from './ngx-pf-mention-dialog/ngx-pf-mention-dialog.component';
import { NgxPfMentionDialogDirective } from './ngx-pf-mention-dialog/ngx-pf-mention-dialog.directive';
import { NgxPfMentionComponent } from './ngx-pf-mention.component';
import { NgxPfMentionService } from './ngx-pf-mention.service';

@NgModule({
  declarations: [NgxPfMentionDirective, NgxPfMentionDialogComponent, NgxPfMentionDialogDirective, NgxPfMentionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgxPfMentionComponent,
    NgxPfMentionDialogComponent,
    NgxPfMentionDirective,
    NgxPfMentionDialogDirective
  ],
  entryComponents: [
    NgxPfMentionDialogComponent
  ],
  providers: [
    NgxPfMentionService
  ]
})
export class NgxPfMentionModule { }
