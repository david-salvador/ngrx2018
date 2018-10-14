import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { metaReducers, reducers } from './reducers';
import { CustomRouterStateSerializer } from './reducers/router.serializer';
import { SignupComponent } from './containers/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    /**
     * With FormsModule, Angular will detect our forms and create an object representation
     * of it, behind the scenes.
     */
    FormsModule,
    HttpClientModule,
    SharedModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'NgRx 2018 App',
          logOnly: environment.production
        })
      : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([])
  ],
  exports: [HttpClientModule],
  declarations: [HomePageComponent, SignupComponent, NotFoundPageComponent],
  providers: [{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }]
})
export class CoreModule {}
