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
