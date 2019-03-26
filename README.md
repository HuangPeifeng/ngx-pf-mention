# NgxPfMention

NgxPfMention

## 安裝

```bash
npm i ngx-pf-mention
```

## 引用

`app.module.ts`
```typescript
...something...
import { NgxPfMentionModule } from './ngx-pf-mention/ngx-pf-mention.module';

@NgModule({
  ...something...
  imports: [...something..., NgxPfMentionModule],
  ...something...
})
export class YourModule {}
```

## 快速上手

### 一、Create List View
```bash
ng g c Test
```
```typescript
...something...

@NgModule({
  ...something...
  entryComponents: [...something..., TestComponent],
  ...something...
})
export class YourModule {}
```
`test.component.html`
```typescript
<ul>
  <li *ngFor="let item of list" (click)="output(item)">
    {{ item.name }}
  </li>
</ul>
```
`test.component.ts`
```typescript
export class TestComponent implements OnInit {
list = [
    {
      id: '1',
      name: 'Test'
    },
    {
      id: '2',
      name: 'David'
    },
    {
      id: '3',
      name: 'JC'
    },
    {
      id: '4',
      name: 'Peifeng'
    },
    {
      id: '5',
      name: 'Kevin'
    },
    {
      id: '6',
      name: 'Max'
    }
  ];
```

### 二、ngx-pf-mention Tag

`your.component.html`
```typescript
<ngx-pf-mention [ngxPfMention]="component" [ngxPfMentionFactory]="factory"></ngx-pf-mention>
```
`your.component.ts`
```typescript
import { Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { TestComponent } from './test/test.component';

export class YourComponent {
  component = TestComponent;
  factory;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector
  ) {
    this.factory = {
      resolver: this._resolver,
      injector: this._injector
    };
  }
}
```

