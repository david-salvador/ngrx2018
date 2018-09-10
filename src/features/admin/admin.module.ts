import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserOneLinerComponent } from './components/user-one-liner/user-one-liner.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';

@NgModule({
  declarations: [UserDetailComponent, UserOneLinerComponent, AdminPageComponent],
  imports: [AdminRoutingModule],
  providers: []
})
export class AdminModule {}
