import { combineReducers } from "redux";

import { uiReducer } from "./ui.reducer";
import { userReducer } from "./user.reducer";

export interface IAction<T, P> {
  type: T;
  payload: P;
}

export const rootReducer = combineReducers({
  userReducer,
  uiReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
