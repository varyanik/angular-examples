import {
  Component,
  ComponentRef,
  ViewContainerRef,
  ViewChild,
  AfterContentInit,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <ng-template #tmpl let-name let-location="location">
        {{name}}: {{location}}
      </ng-template>
      |
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="context2">
      </ng-container>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  context1 = {
    $implicit: 'John Smith',
    location: 'England, UK'
  };
  context2 = {
    $implicit: 'Don Quixote',
    location: 'Spain, Madrid'
  };

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry !: ViewContainerRef;
  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  constructor() { }

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, this.context1);
  }
}
