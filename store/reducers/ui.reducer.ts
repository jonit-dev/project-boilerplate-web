import { Reducer } from "redux";

import { AlertAction, AlertActionTypes, IAlert } from "../../types/ui.types";

export interface IUIReducer {
  uiAlert: IAlert | null;
}

const initialState: IUIReducer = {
  uiAlert: null,
};

export const uiReducer: Reducer<IUIReducer, AlertAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AlertActionTypes.Show:
      const newAlert: IAlert = action.payload;

      return { ...state, uiAlert: newAlert };

    case AlertActionTypes.Clear:
      return { ...state, uiAlert: null };

    default:
      return state;
  }
};
