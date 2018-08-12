import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './containers/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,

  ],
  exports: [HttpClientModule],
  declarations: [
    HomePageComponent,
  ]
})
export class CoreModule { }
