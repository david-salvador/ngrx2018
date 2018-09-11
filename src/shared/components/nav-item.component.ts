import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  template: `
    <mat-list-item (click)="this.clicked()">
      <mat-icon mat-list-icon>{{ icon }}</mat-icon>
      <span mat-line><ng-content></ng-content></span>
      <span mat-line class="secondary">{{ hint }}</span>
    </mat-list-item>
  `,
  styles: [
    `
      .secondary {
        color: rgba(0, 0, 0, 0.54);
      }
    `
  ]
})
export class NavItemComponent {
  @Input()
  icon = '';
  @Input()
  hint = '';
  @Input()
  routerLink: string | any[] = '/';
  @Output()
  itemClicked: EventEmitter<any>;

  constructor() {
    this.itemClicked = new EventEmitter<any>();
  }

  public clicked() {
    this.itemClicked.emit();
  }
}
