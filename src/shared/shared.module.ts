import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MButtonModule } from './components';
import { MaterialModule } from './material/material.module';
// import { LayoutComponent } from './components/layout.component';
// import { SidenavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar.component';

export const SHARED = [FlexLayoutModule, MaterialModule, MButtonModule];
// export const SHARED_COMPONENTS = [LayoutComponent, SidenavComponent, NavItemComponent, ToolbarComponent];
export const SHARED_COMPONENTS = [NavItemComponent, ToolbarComponent];
@NgModule({
  declarations: SHARED_COMPONENTS,
  imports: [CommonModule, RouterModule, ...SHARED],
  exports: [CommonModule, RouterModule, ...SHARED, ...SHARED_COMPONENTS]
})
export class SharedModule {}
