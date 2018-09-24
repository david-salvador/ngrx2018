import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromLayout from './layout.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

/**
 * Selectors
 *
 * Selectors provide memoization: only emits, state-branches, if relevant/value change.
 * *createSelector* returns a pure function that remembers prev calculations. The last
 * argument of the selector call is not a selector, ia a projector function. The projector
 * takes the o/p of prev selector. It called with same arguments it does not recalculate,
 * fetches the result of calc from memroy and passes w/o executing any fo the selector or projector fon.
 *
 * https://toddmotto.com/ngrx-store-understanding-state-selectors#feature-state-selectors
 *
 * createFeatureSelector allows us to get a top-level feature state property of the state
 * tree simply by calling it out by its feature name.
 * Returns a typed selector function that will return a reference to that specific slice of state.
 *
 */

export const getLayoutState = createFeatureSelector<AppState, fromLayout.State>('layout');

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);

export * from './layout.reducer';
