import { Reducer } from "redux";

import { IUser, IUserLoginPayload, UserAction, UserActionTypes } from "../../types/user.types";

export interface IUserReducer {
  user: IUser | null;
  auth: IUserLoginPayload | null;
}

const initialState: IUserReducer = {
  user: null,
  auth: null,
};

export const userReducer: Reducer<IUserReducer, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.Login:
      return { ...state, auth: action.payload };

    case UserActionTypes.Clear:
      return {
        user: initialState.user,
        auth: initialState.auth,
      };

    case UserActionTypes.GoogleOAuthStoreToken:
      const { accessToken, refreshToken } = action.payload;

      return {
        ...state,
        auth: {
          accessToken,
          refreshToken,
        },
      };

    default:
      return state;
  }
};
