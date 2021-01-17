import { Reducer } from "redux";

import { IUser, IUserLoginPayload, UserAction, UserActionTypes } from "../../types/user.types";

export interface IUserReducer {
  user: IUser | null;
  auth: IUserLoginPayload | null;
  isLoggedIn: boolean;
}

const initialState: IUserReducer = {
  user: null,
  auth: null,
  isLoggedIn: false,
};

export const userReducer: Reducer<IUserReducer, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.Register:
      const newUser = action.payload;

      return { ...state, user: newUser };

    case UserActionTypes.Login:
      return { ...state, auth: action.payload, isLoggedIn: true };

    case UserActionTypes.Clear:
      return initialState;

    case UserActionTypes.RefreshInfo:
      const user = action.payload;

      return { ...state, user };

    case UserActionTypes.GoogleOAuthStoreToken:
      const { accessToken, refreshToken } = action.payload;

      return {
        ...state,
        auth: {
          accessToken,
          refreshToken,
        },
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
