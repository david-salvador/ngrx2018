import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `

      
        <ng-content></ng-content>
      

  `,
  styles: [
    `
      mat-sidenav {
        width: 300px;
      }
    `
  ]
})
export class SidenavComponent {
  @Input()
  open = false;
  @Output()
  closeMenu = new EventEmitter();
}

/*

    <mat-sidenav #sidenav [opened]="open" (keydown.escape)="sidenav.close()" (closedStart)="closeMenu.emit()" disableClose>
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
*/
