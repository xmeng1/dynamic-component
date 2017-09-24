import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdHost]'
})
// 1. Add directive to mark valid insertion points in the template.
export class AdDirective {
  // 2. inject ViewContainerRef to get the access for view.
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
