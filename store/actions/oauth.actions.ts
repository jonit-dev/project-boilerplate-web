import { HttpStatus, IGoogleOAuthUrlResponse } from "@project-boilerplate/shared/dist";
import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import { IDispatchUserGoogleOAuthStoreToken, UserActionTypes } from "../../types/user.types";
import { userRefreshInfo } from "./user.action";

export const userGoogleOAuthStoreToken = (
  accessToken: string,
  refreshToken?: string
) => async (
  dispatch: Dispatch<
    IDispatchUserGoogleOAuthStoreToken | ReturnType<typeof userRefreshInfo>
  >
) => {
  dispatch({
    type: UserActionTypes.GoogleOAuthStoreToken,
    payload: {
      accessToken,
      refreshToken,
    },
  });

  dispatch(userRefreshInfo());
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
