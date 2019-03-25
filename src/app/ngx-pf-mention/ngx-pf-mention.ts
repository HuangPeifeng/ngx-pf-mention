import { ComponentFactoryResolver, Injector } from '@angular/core';

export interface NgxFactory {
  resolver: ComponentFactoryResolver;
  injector: Injector;
}

export interface NgxPosition {
  left: string;
  top: string;
}

export interface NgxSender {
  inputData: any;
  sendData: any;
}

export interface NgxOption {
  width?: string;
  height?: string;
}

export interface NgxElemenStyle {
  /** 背景色 */
  backgroundColor: string;
  /** 字色 */
  fontColor: string;
  /** 邊框色 */
  borderColor: string;
  /** 邊框寬度 */
  borderWidth: string;
  /** 邊框種類 */
  borderStyle: string;
  /** 邊框圓弧 */
  borderRadius: string;
  /** 文字間距 */
  lineHeight: string | Number;
}
