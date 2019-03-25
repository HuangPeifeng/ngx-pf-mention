import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  Output,
  EventEmitter,
  ElementRef,
  ComponentFactoryResolver,
  Renderer,
  ViewChild,
  Injector
} from '@angular/core';
import { NgxPfMentionDirective } from './ngx-pf-mention.directive';
import { NgxPfMentionDialogComponent } from './ngx-pf-mention-dialog/ngx-pf-mention-dialog.component';
import { NgxElemenStyle, NgxFactory, NgxOption, NgxPosition } from './ngx-pf-mention';

@Component({
  selector: 'ngx-pf-mention',
  templateUrl: './ngx-pf-mention.component.html',
  styleUrls: ['./ngx-pf-mention.component.scss']
})
export class NgxPfMentionComponent implements OnInit {
  @Input() ngxPfMention: ComponentRef<any>;
  @Input() ngxPfMentionFactory: NgxFactory;
  @Input() ngxPfMentionKey = '@' as string;
  @Input() ngxPfMentionProperty = 'name';
  @Input() ngxPfMentionData: any;
  @Input() ngxPfMentionOption: NgxOption;
  @Input() ngxPfMentionStyle: NgxElemenStyle;
  @Input() ngxPfMentionFontColor = '#3557ff' as string;

  @Output() ngxPfMentionOutput = new EventEmitter;

  componentRef: ComponentRef<any>;
  isOpenDialog = false;
  keyStart = null;
  keyBefore = '';
  ketAfter = '';
  isInput = false;
  inputEle = null;
  inputDiv = null;
  inputVal = '';

  @ViewChild(NgxPfMentionDirective) _dirctive: NgxPfMentionDirective;

  constructor(
    private ele: ElementRef,
    private renderer: Renderer,
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector
  ) { }

  ngOnInit() {
    this.renderer.listen(
      this.ele.nativeElement,
      'input',
      $event => {
        if (!this.isOpenDialog) {
          if ($event.data === this.ngxPfMentionKey) {
            this.loadComponent(this.ngxPfMention, $event);
            this.isOpenDialog = true;
            this.keyStart = document.getSelection().anchorOffset;
          }
        } else {
          const allValue = this.inputDiv.innerText;

          /** 檢測是否將標記刪除 */
          if ($event.inputType === 'deleteContentBackward') {
            const lastValue = this.inputDiv.innerText.substr(this.keyStart - 1, 1);
            if (lastValue !== this.ngxPfMentionKey) {
              this.closeDialog();
            }
          }

          if (!this.isInput) {
            this.keyBefore = allValue.substr(0, this.keyStart - 1);
            this.ketAfter = allValue.substr(this.keyStart + 1);
            this.isInput = true;
          }

          this.inputVal = allValue.replace(this.keyBefore, '').replace(this.ketAfter, '').replace(this.ngxPfMentionKey, '');

          // this.inputVal = this.inputVal + $event.data;
          this.componentRef.instance.inputValue.next(this.inputVal);

        }

      });

    this.renderer.listen(
      window,
      'click',
      $event => {
        if (this.componentRef) {
          this.closeDialog();
        }
      });
  }

  loadComponent(component: ComponentRef<any>, $event) {
    this.inputEle = $event;

    const componentFactory = this._resolver.resolveComponentFactory(NgxPfMentionDialogComponent);

    this._dirctive.viewContainerRef.clear();

    this.componentRef = this._dirctive.viewContainerRef.createComponent(componentFactory);

    const position = (this.createCaretPositionEle($event)) as NgxPosition;

    this.componentRef.instance.component = component;
    this.componentRef.instance.factory = { resolver: this._resolver, injector: this._injector };
    this.componentRef.instance.position = position;
    this.componentRef.instance.option = this.ngxPfMentionOption;
    this.componentRef.instance.data = this.ngxPfMentionData;

    this.componentRef.instance.send.subscribe(sendVal => {
      this.ngxPfMentionOutput.next(sendVal);
      this.setMention(sendVal);
      this.closeDialog();
    });

    this.renderer.listen(
      this.inputEle.target,
      'click',
      clickEvent => {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        clickEvent.stopImmediatePropagation();
      });
  }

  closeDialog() {
    this.isOpenDialog = false;
    this.reset();
    this.componentRef.destroy();
  }

  /** 將所選的項目替換至input element中 */
  setMention(value) {
    const allValue = this.inputDiv.innerText;
    const beforeStr = allValue.substr(0, this.keyStart - 1);
    const afterStr = allValue.substr(this.keyStart + this.inputVal.length);

    this.inputDiv.innerHTML =
      `${beforeStr}&nbsp<a style="color: ${this.ngxPfMentionFontColor}">@${value[this.ngxPfMentionProperty]}</a>&nbsp${afterStr}`;
  }

  /** 建立計算目前指標位置的element */
  createCaretPositionEle($event) {
    const element = $event.target;
    this.inputDiv = document.getSelection().anchorNode.parentNode;

    let coords = { top: 0, left: 0 };

    const span = document.createElement('span');
    span.textContent = this.inputDiv.innerText.substring(0, document.getSelection().anchorOffset) || '.';
    this.inputDiv.appendChild(span);

    span.style.position = 'absolute';
    span.style.left = '0px';
    span.className = 'input-caret-position-mirror';

    coords = {
      top: element.offsetTop + span.offsetTop + Number(window.getComputedStyle(span).fontSize.split('px')[0]),
      left: element.offsetLeft + span.offsetLeft + span.clientWidth
    };

    this.inputDiv.removeChild(span);

    return {
      left: `${coords.left}px`,
      top: `${coords.top}px`
    };
  }

  /** 給予element style */
  getStyle() {
    if (this.ngxPfMentionStyle) {
      return {
        'background-color': this.ngxPfMentionStyle.backgroundColor || '#ffffff',
        'color': this.ngxPfMentionStyle.fontColor || '#000000',
        'border-color': this.ngxPfMentionStyle.borderColor || '#000000',
        'border-style': this.ngxPfMentionStyle.borderStyle || 'solid',
        'border-width': this.ngxPfMentionStyle.borderWidth || '1px',
        'border-radius': this.ngxPfMentionStyle.borderRadius || '0',
        'line-height': this.ngxPfMentionStyle.lineHeight || 1
      };
    }
  }

  /** 重設參數 */
  reset() {
    this.isOpenDialog = false;
    this.keyStart = null;
    this.keyBefore = '';
    this.ketAfter = '';
    this.isInput = false;
    this.inputEle = null;
    this.inputDiv = null;
    this.inputVal = '';
  }

}
