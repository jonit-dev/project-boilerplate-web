import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import { IAPIError } from "../../types/api.types";
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
  try {
    const response = await APIHelper.apiRequest<IUserLoginPayload | IAPIError>(
      "POST",
      "/auth/login",
      credentials,
      false
    );

    const loginSuccessPayload = response.data as IUserLoginPayload;

    dispatch({
      type: UserActionTypes.Login,
      payload: loginSuccessPayload,
    });

    window.location.href = "/main";
  } catch (error) {
    // If it's a custom error message from the server, let's handle it!

    if (error.response) {
      const errorPayload = error.response.data as IAPIError;

      const errorMessage = APIHelper.handleErrorMessage(errorPayload.message);

      alert(errorMessage);
    }
  }
};

export const userLogout = (): IDispatchUserLogout => {
  console.log("Logging out and clearing user data...");

  return {
    type: UserActionTypes.Logout,
  };
};
