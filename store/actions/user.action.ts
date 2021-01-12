import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import {
  IDispatchUserLogin,
  IDispatchUserLogout,
  IUserCredentials,
  IUserLoginPayload,
  UserActionTypes,
} from "../../types/user.types";

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<IDispatchUserLogin>
) => {
  const response = await APIHelper.apiRequest<IUserLoginPayload>(
    "POST",
    "/auth/login",
    credentials
  );

  const loginPayload = response.data as IUserLoginPayload;

  dispatch({
    type: UserActionTypes.Login,
    payload: loginPayload,
  });
};

export const userLogout = (): IDispatchUserLogout => {
  return {
    type: UserActionTypes.Logout,
  };
};
