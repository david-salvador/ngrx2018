import { LayoutActions } from '../actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActions.LayoutActionsUnion
): State {
  switch (action.type) {
    case LayoutActions.LayoutActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case LayoutActions.LayoutActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    case LayoutActions.LayoutActionTypes.TOGGLE_SIDENAV:
      return {
        showSidenav: !state.showSidenav
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
