import { Reducer } from "redux";

import { ActionUser, IUser, UserActionTypes } from "../../types/user.types";

export interface IUserReducer {
  user: IUser | null;
}

const initialState: IUserReducer = {
  user: null,
};

export const userReducer: Reducer<IUserReducer, ActionUser> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.loginUser:
      const user = action.payload;

      return { ...state, user };

    default:
      return state;
  }
};
