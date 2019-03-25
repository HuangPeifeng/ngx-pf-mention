import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxPfMentionService {

  constructor() { }

  /** 取得Element數值 */
  public getValue() {
    return document.getElementsByClassName('ngx-pf-mention-layout')[0].innerHTML;
  }
}
