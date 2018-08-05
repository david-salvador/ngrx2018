import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: '',     redirectTo: 'admin/home', pathMatch: 'full'},
      // { path: 'home', component: AdminPageComponent },
      // { path: ':id',  component: UserDetailComponent },
      { path: '**',   redirectTo: 'admin/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
