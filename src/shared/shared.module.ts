import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MButtonModule } from './components';
import { MaterialModule } from './material/material.module';


export const SHARED = [
  FlexLayoutModule,
  MaterialModule,
  MButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...SHARED
  ],
  exports: [
    CommonModule,
    ...SHARED
  ]
})
export class SharedModule { }
