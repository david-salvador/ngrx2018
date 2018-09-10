import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import 'hammerjs';

export const MAT_MODULES = [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule];

@NgModule({
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class MaterialModule {}
