import { HttpStatus, IGoogleOAuthUrlResponse } from "@project-boilerplate/shared/dist";
import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import { IDispatchUserGoogleOAuthStoreToken, UserActionTypes } from "../../types/user.types";

export const userGoogleOAuthStoreToken = (
  accessToken: string,
  refreshToken?: string
): IDispatchUserGoogleOAuthStoreToken => {
  return {
    type: UserActionTypes.GoogleOAuthStoreToken,
    payload: {
      accessToken,
      refreshToken,
    },
  };
};

export const getGoogleOAuthUrl = () => async (): Promise<
  string | undefined
> => {
  try {
    const response = await APIHelper.apiRequest<IGoogleOAuthUrlResponse>(
      "GET",
      "/auth/google/url",
      null,
      false
    );

    if (response.status) {
      if (response.status === HttpStatus.OK) {
        const { googleOAuthUrl } = response.data as IGoogleOAuthUrlResponse;

        return googleOAuthUrl;
      }
    }
  } catch (error) {
    console.error(error);
  }
};
