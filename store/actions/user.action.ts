import Router from "next/router";
import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import { IAPIError } from "../../types/api.types";
import { IDispatchAlertShow } from "../../types/ui.types";
import {
  IDispatchUserClear,
  IDispatchUserLogin,
  IUserCredentials,
  IUserLoginPayload,
  UserActionTypes,
} from "../../types/user.types";
import { showAlert } from "./ui.action";

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<IDispatchUserLogin | IDispatchAlertShow>
) => {
  try {
    const response = await APIHelper.apiRequest<IUserLoginPayload | IAPIError>(
      "POST",
      "/auth/auth",
      credentials,
      false
    );

    const loginSuccessPayload = response.data as IUserLoginPayload;

    dispatch({
      type: UserActionTypes.Login,
      payload: loginSuccessPayload,
    });

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
