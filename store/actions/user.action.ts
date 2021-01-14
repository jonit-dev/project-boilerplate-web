import Router from "next/router";
import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import { IAPIError } from "../../types/api.types";
import {
  IDispatchUserClear,
  IDispatchUserLogin,
  IDispatchUserRefresh,
  IUser,
  IUserCredentials,
  IUserLoginPayload,
  UserActionTypes,
} from "../../types/user.types";
import { showAlert } from "./ui.action";

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<
    | IDispatchUserLogin
    | ReturnType<typeof showAlert>
    | ReturnType<typeof userRefreshInfo>
  >
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

    dispatch(userRefreshInfo());

    Router.route = "/main";
  } catch (error) {
    // If it's a custom error message from the server, let's handle it!

    if (error.response) {
      const errorPayload = error.response.data as IAPIError;

      const errorMessage = APIHelper.handleErrorMessage(errorPayload.message);

      dispatch(showAlert("Oops!", errorMessage));
    }
  }
};

export const userRefreshInfo = () => async (
  dispatch: Dispatch<IDispatchUserRefresh>
) => {
  try {
    const response = await APIHelper.apiRequest<IUser>(
      "GET",
      "/users/self",
      null,
      true
    );

    const user = response.data as IUser;

    if (user) {
      dispatch({
        type: UserActionTypes.RefreshInfo,
        payload: user,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const userClearInfo = (): IDispatchUserClear => {
  return {
    type: UserActionTypes.Clear,
  };
};

export const userLogout = (): IDispatchUserClear => {
  console.log("Logging user out...");
  if (!Router.route.includes("login")) {
    Router.push("/auth");
  }

  return {
    type: UserActionTypes.Clear,
  };
};
