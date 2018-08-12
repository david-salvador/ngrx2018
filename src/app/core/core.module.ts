import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { metaReducers, reducers } from './ngrx/core.reducers';
import { CustomSerializer } from './ngrx/router.serializer';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })

  ],
  exports: [HttpClientModule],
  declarations: [
    HomePageComponent,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
})
export class CoreModule { }
