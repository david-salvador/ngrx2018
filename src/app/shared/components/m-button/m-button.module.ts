import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MButtonComponent } from './m-button.component';

@NgModule({
  declarations: [MButtonComponent],
  imports: [MatButtonModule],
  exports: [MButtonComponent]
})
export class MButtonModule { }

