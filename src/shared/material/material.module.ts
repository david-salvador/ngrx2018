import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';
import 'hammerjs';

export const MAT_MODULES = [
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
];

@NgModule({
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class MaterialModule {}
