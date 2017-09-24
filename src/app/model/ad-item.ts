import {Type} from '@angular/core';
// 3. Ad item class model
export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}
