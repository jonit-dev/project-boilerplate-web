import { TextHelper } from "@project-boilerplate/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Router from "next/router";

import { apiAxios } from "../constants/axios.constants";
import { showAlert } from "../store/actions/ui.action";
import { userLogout } from "../store/actions/user.action";
import { IUserReducer } from "../store/reducers/user.reducer";
import { store } from "../store/store";
import { IAPIError } from "../types/api.types";
import { TS } from "./TranslationHelper";

export class APIHelper {
  public static async request<T>(
    instance: AxiosInstance,
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ): Promise<AxiosResponse<T>> {
    return instance.request<T>({ method, url, data });
  }

  public static async apiRequest<T>(
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object | null,
    authenticated = true
  ): Promise<AxiosResponse<T | IAPIError>> {
    // before even beginning our request, lets check if the user has internet

    const online = window.navigator.onLine;

    if (!online) {
      store.dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("global", "connectionError")
        )
      );
    }

    if (authenticated) {
      try {
        const userReducer: IUserReducer = store.getState().userReducer;

        const accessToken = userReducer.auth.accessToken;
        return apiAxios.request<T>({
          method,
          url,
          data,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } catch (error) {
        console.error(error);

        store.dispatch(
          showAlert(
            TS.translate("auth", "pleaseLogin"),
            TS.translate("auth", "couldntAuthenticate")
          )
        );
        store.dispatch(userLogout());

        Router.push("/auth");
      }
    }

    return apiAxios.request<T>({ method, url, data });
  }

  /**
   * Error messages from our API could be a string or an array of strings. This function parses it and returns the proper value
   */
  public static handleErrorMessage(message: string | string[]) {
    if (Array.isArray(message)) {
      const parsedMessage = message
        .map((m) => `- ${TextHelper.capitalizeFirstLetter(m)}`)
        .join("\n\n");

      console.log(parsedMessage);
      return parsedMessage;
    } else {
      return message;
    }
  }
}
