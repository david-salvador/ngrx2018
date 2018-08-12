import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/containers/home-page/home-page.component';


const ROUTES: Routes = [


      { path: '',    component: HomePageComponent },
      // { path: '',     redirectTo: '/', pathMatch: 'full'},
      // { path: 'home', component: AdminPageComponent },
      // { path: ':id',  component: UserDetailComponent },
      { path: 'admin', loadChildren: '../features/admin/admin.module#AdminModule'},
      { path: '**',   redirectTo: '', pathMatch: 'full' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
