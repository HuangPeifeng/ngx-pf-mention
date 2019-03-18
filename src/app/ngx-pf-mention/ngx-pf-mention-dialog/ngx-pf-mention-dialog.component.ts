import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ReflectiveInjector,
  ComponentRef,
  ViewChild,
  Renderer,
  ElementRef
} from '@angular/core';
import { NgxFactory, NgxPosition, NgxSender } from '../ngx-pf-mention';
import { NgxPfMentionDialogDirective } from './ngx-pf-mention-dialog.directive';

@Component({
  selector: 'app-ngx-pf-mention-dialog',
  templateUrl: './ngx-pf-mention-dialog.component.html',
  styleUrls: ['./ngx-pf-mention-dialog.component.css']
})
export class NgxPfMentionDialogComponent implements OnInit {
  @Input() component;
  @Input() factory: NgxFactory;
  @Input() position: NgxPosition;
  @Input() inputValue = new EventEmitter;
  @Input() data: any;

  @Output() sendInputValue = new EventEmitter;
  @Output() send = new EventEmitter<any>();

  isSend = false;

  refInjector: ReflectiveInjector;
  componentRef: ComponentRef<any>;

  @ViewChild(NgxPfMentionDialogDirective) mentionDialog: NgxPfMentionDialogDirective;

  constructor(
    private renderer: Renderer,
    private ele: ElementRef
  ) {
    this.renderer.listen(
      this.ele.nativeElement,
      'click',
      $event => {
        $event.preventDefault();
        $event.stopPropagation();
        $event.stopImmediatePropagation();
        // NgxTagsService.clickDialog.next(true);
      });
  }

  ngOnInit() {
    this.loadComponent();

    this.inputValue.subscribe(val => {
      this.componentRef.instance.sendInputValue.next(val);
    });
  }

  loadComponent() {
    const componentFactory = this.factory.resolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.mentionDialog.viewContainerRef;

    viewContainerRef.clear();

    this.refInjector = ReflectiveInjector.resolveAndCreate([{ provide: this.component, useValue: this.component }], this.factory.injector);

    this.componentRef = viewContainerRef.createComponent(componentFactory, 0, this.refInjector);

    (this.componentRef.instance as NgxSender).inputData = this.data;

    (this.componentRef.instance as NgxSender).sendData.subscribe(x => {
      this.send.emit(x);
    });
  }

  getPosition() {
    if (this.position) {
      return {
        left: this.position.left,
        top: this.position.top
      };
    }
  }
}
