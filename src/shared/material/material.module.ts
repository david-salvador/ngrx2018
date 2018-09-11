import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import 'hammerjs';

export const MAT_MODULES = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class MaterialModule {}
