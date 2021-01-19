import { HttpStatus } from "@project-boilerplate/shared/dist";
import Router from "next/router";
import { Dispatch } from "react";

import { app } from "../../constants/env";
import { APIHelper } from "../../libs/APIHelper";
import { TS } from "../../libs/TranslationHelper";
import { IAPIError } from "../../types/api.types";
import {
  IChangePasswords,
  IDispatchUserClear,
  IDispatchUserForgotPassword,
  IDispatchUserLogin,
  IDispatchUserRefresh,
  IDispatchUserRegister,
  INewUser,
  IUser,
  IUserCredentials,
  IUserLoginPayload,
  UserActionTypes,
} from "../../types/user.types";
import { clearAlert, showAlert } from "./ui.action";

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<IDispatchUserLogin | ReturnType<typeof showAlert>>
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

    Router.push("/main");
  } catch (error) {
    console.log(error);
  }
};

export const userRegister = (newUser: INewUser) => async (
  dispatch: Dispatch<
    | IDispatchUserRegister
    | ReturnType<typeof userLogin>
    | ReturnType<typeof showAlert>
  >
) => {
  try {
    const response = await APIHelper.apiRequest<INewUser>(
      "POST",
      "/auth/signup",
      newUser,
      false
    );

    // if user was created successfully...

    if (response.status === HttpStatus.Created) {
      const registeredUser = response.data as IUser;

      await dispatch({
        type: UserActionTypes.Register,
        payload: registeredUser,
      });

      console.log("user created");

      const credentials: IUserCredentials = {
        email: newUser.email,
        password: newUser.password,
      };

      await dispatch(userLogin(credentials));

      dispatch(
        showAlert(
          TS.translate("global", "success"),
          TS.translate("auth", "accountCreatedSuccessfully"),
          "success"
        )
      );

      setTimeout(() => {
        Router.push("/main");
      }, 3000);
    }
  } catch (error) {
    console.log(error);
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

    console.log("refreshing user info");

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

export const userForgotPassword = (email: string) => async (
  dispatch: Dispatch<
    | IDispatchUserForgotPassword
    | ReturnType<typeof showAlert>
    | ReturnType<typeof clearAlert>
  >
) => {
  try {
    const response = await APIHelper.apiRequest(
      "POST",
      "/auth/forgot-password",
      {
        email,
      },
      false
    );

    if (response.status === HttpStatus.OK) {
      dispatch(
        showAlert(
          TS.translate("global", "success"),
          TS.translate("auth", "passwordRecoverySuccess"),
          "success"
        )
      );

      setTimeout(() => {
        dispatch(clearAlert());
        Router.push("/auth");
      }, 5000);
    }
  } catch (error) {
    console.error(error);
  }
};

export const userChangePassword = (changePassword: IChangePasswords) => async (
  dispatch: Dispatch<
    | IDispatchUserLogin
    | ReturnType<typeof showAlert>
    | ReturnType<typeof userClearInfo>
    | ReturnType<typeof clearAlert>
  >
) => {
  try {
    const response = await APIHelper.apiRequest(
      "POST",
      "/auth/change-password",
      changePassword
    );

    if (response.status === HttpStatus.OK) {
      dispatch(
        showAlert(
          TS.translate("global", "success"),
          "Your password was changed successfully! Please, login again.",
          "success"
        )
      );

      setTimeout(() => {
        dispatch(clearAlert());
        dispatch(userClearInfo());
        Router.push("/auth");
      }, 3000);
    } else {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("auth", "changePasswordGenericError", {
            adminEmail: app.general.adminEmail,
          })
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
};
