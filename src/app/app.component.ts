import { Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { TestComponent } from './test/test.component';

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
    private _injector: Injector
  ) {
    this.factory = {
      resolver: this._resolver,
      injector: this._injector
    };
  }

  ngxTagsOutput($event) {
    // console.log($event);
  }
}
