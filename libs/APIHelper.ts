import { TextHelper } from "@project-boilerplate/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { apiAxios } from "../constants/axios.constants";
import { IAPIError } from "../types/api.types";

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
    // if (authenticated) {
    //   const userReducer = store.getState().userReducer;

    //   const { token } = userReducer.user;
    //   return apiAxios.request<T>({
    //     method,
    //     url,
    //     data,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    // }

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
