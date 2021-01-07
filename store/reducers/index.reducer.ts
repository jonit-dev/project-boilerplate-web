import { combineReducers } from "redux";

import { userReducer } from "./user.reducer";

export interface IAction<T, P> {
  type: T;
  payload: P;
}

export const rootReducer = combineReducers({
  userReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
