import { Action } from '@ngrx/store';

// ORIGIN: page state the user is seeing, or api, process origin of the action
// EVENT: ux story meaningful event
// ACTION_[ORIGIN]_EVENT
export enum LayoutActionTypes {
  OPEN_SIDENAV = '[APP_LAYOUT] Open Sidenav',
  CLOSE_SIDENAV = '[APP_LAYOUT] Close Sidenav'
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CLOSE_SIDENAV;
}

// the export below will help us writing our reducers later one
export type LayoutActionsUnion = OpenSidenav | CloseSidenav;
