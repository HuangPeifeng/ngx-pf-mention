import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgxPfMentionModule } from './ngx-pf-mention/ngx-pf-mention.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgxPfMentionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TestComponent
  ]
})
export class AppModule { }
