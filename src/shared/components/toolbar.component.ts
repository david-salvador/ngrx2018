import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="this.menuIconClicked()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
    </mat-toolbar>
  `
})
export class ToolbarComponent {
  @Output()
  menuItemClick: EventEmitter<any>;

  constructor() {
    this.menuItemClick = new EventEmitter();
  }

  menuIconClicked() {
    this.menuItemClick.emit();
  }
}
