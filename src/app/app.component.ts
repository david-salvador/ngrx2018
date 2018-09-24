import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// import * as AuthActions from '@ds-features/auth/actions';
// import * as fromAuth from '@example-app/auth/reducers';
import * as fromCore from '@ds-app/core/reducers';
import { LayoutActions } from '@ds-app/core/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx2018';

  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor (private store: Store<fromCore.State>, private router: Router) {
    // constructor() {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromCore.getShowSidenav));
    // this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  public navItemClicked(name: string) {
    // console.log('navItemClicked');
    this.closeSidenav();
    switch (name) {
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'search':
        this.router.navigate(['/search']);
        break;
      case 'signin':
        this.router.navigate(['/signin']);
        break;
      case 'signup':
        this.router.navigate(['/signup']);
        break;
      case 'logout':
        this.router.navigate(['/logout']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutActions.ToggleSidenav());
  }

  logout() {
    this.closeSidenav();

    // this.store.dispatch(new AuthActions.LogoutConfirmation());
  }
}
