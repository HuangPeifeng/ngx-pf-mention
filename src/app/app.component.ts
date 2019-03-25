import { Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { TestComponent } from './test/test.component';
import { NgxPfMentionService } from './ngx-pf-mention/ngx-pf-mention.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgxPfMention';

  component = TestComponent;
  factory;
  option = {
    width: '400px',
    height: '400px'
  };

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector,
    private _ngxPfMentionService: NgxPfMentionService
  ) {
    this.factory = {
      resolver: this._resolver,
      injector: this._injector
    };
  }

  ngxPfMentionOutput($event) {
    console.log($event);
  }

  get() {
    console.log(this._ngxPfMentionService.getValue());
  }
}
